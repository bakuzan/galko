import constructObjectFromSearchParams from 'ayaka/constructObjectFromSearchParams';
import generateUniqueId from 'ayaka/generateUniqueId';
import slugify from 'ayaka/slugify';
import { css, customElement, html, LitElement, property } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import './elements/button';
import './elements/image-cycler';
import './elements/router-link';

import characters from '@/data/characters.json';
import series from '@/data/series.json';
import cx from '@/utils/classes';
import { Character } from './interfaces/Character';
import { Deck } from './interfaces/Deck';
import router from './routes';
import controlStyle from './style/control';
import floatLabel from './style/floatLabel';
import gridStyle from './style/grid';
import { dataStore } from './utils/storage';

type DeckPageField = 'deckName' | 'search';

function resolveSeriesName(seriesId: number) {
  const item = series.find((s) => s.id === seriesId);
  return item ? item.name : '(Unknown)';
}

@customElement('glk-decks-builder')
class DecksBuilder extends LitElement {
  static get styles() {
    return [
      floatLabel,
      controlStyle,
      ...gridStyle,
      css`
        .decks__title {
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        .deck-operations {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
        }

        .button-block {
          display: flex;
          justify-content: space-between;
          margin: 5px 0;
        }

        .glk-control--stretch {
          flex: 1;
          margin-right: 10px;
        }

        .feedback {
          display: flex;
          min-height: 2rem;
          color: var(--danger-colour);
          margin: 5px 0;
          white-space: pre-line;
        }

        .view {
          padding: 5px 0;
          margin: 5px 0;
        }
        .flex-spaced {
          display: flex;
          justify-content: space-between;
        }
        .search-info {
          font-size: 0.8rem;
          line-height: 1.25;
        }
        .glk-control--narrow {
          flex: unset;
          margin: 0;
        }
      `
    ];
  }

  @property({ type: Boolean })
  private noDeck: boolean = false;

  @property({ type: Array })
  private characters: (Character & { seriesName: string })[] = [];

  @property({ type: String })
  private deckId: string = '';

  @property({ type: String })
  private deckName: string = '';

  @property({ type: Array })
  private deckCharacterIds: number[] = [];

  @property({ type: String })
  private search: string = '';

  @property({ type: Boolean })
  private showOnlySelected: boolean = false;

  @property({ type: String })
  private feedback: string = '';

  @property({ type: Function })
  private unsub!: () => void;

  public firstUpdated() {
    this.unsub = router.subscribe(() => this.initDeckBuilder());
    this.initDeckBuilder();
    this.characters = characters.map((x) => ({
      ...x,
      seriesName: resolveSeriesName(x.seriesId)
    }));
  }

  public disconnectedCallback() {
    if (this.unsub) {
      this.unsub();
    }
  }

  public render() {
    const canSave = true;
    const lowerSearch = this.search.toLowerCase();
    const filteredCharacters = this.characters.filter(
      (x) =>
        (x.name.toLowerCase().includes(lowerSearch) ||
          x.seriesName.toLowerCase().includes(lowerSearch)) &&
        (!this.showOnlySelected ||
          (this.showOnlySelected && this.deckCharacterIds.includes(x.id)))
    );

    if (this.noDeck) {
      return html`
        <div>
          <h2>We couldn't find what you were looking for.</h2>
          <div>
            <glk-router-link .href=${router.base}
              >Return to Home</glk-router-link
            >
          </div>
        </div>
      `;
    }

    return html`
      <div class="decks">
        <div class="deck-operations">
          <div class="glk-control glk-control--stretch has-float-label">
            <label for="deckName">Deck Name</label>
            <input
              id="deckName"
              name="deckName"
              class="glk-control__input"
              placeholder="Enter a name for the deck"
              type="text"
              .value=${this.deckName}
              @input=${this.onUserInput}
            />
          </div>

          <div>
            <div class="button-block">
              <glk-button
                primary
                ?disabled=${!canSave}
                @press=${this.handleSave}
              >
                Save
              </glk-button>
              <glk-button primary ?disabled=${!canSave} @press=${this.onDone}>
                Done
              </glk-button>
            </div>

            <div class="button-block">
              <glk-button
                danger
                ?disabled=${!this.deckId}
                @press=${this.dropDeck}
              >
                Delete Deck
              </glk-button>
            </div>
          </div>
        </div>

        <div class="feedback">
          ${this.feedback}
        </div>

        <div class="view">
          <div class="glk-control has-float-label">
            <label for="search">Search</label>
            <input
              id="search"
              name="search"
              class="glk-control__input"
              placeholder="Enter a character or series name to filter the character list"
              type="text"
              .value=${this.search}
              @input=${this.onUserInput}
            />
          </div>
          <div class="flex-spaced">
            <div class="search-info">
              <div>
                Showing ${filteredCharacters.length} of ${characters.length}
              </div>
              <div>${this.deckCharacterIds.length} selected</div>
            </div>
            <div class="glk-control glk-control--checkbox glk-control--narrow">
              <label for="showOnlySelected" class="glk-control__label">
                <input
                  type="checkbox"
                  id="showOnlySelected"
                  class="glk-checkbox"
                  ?checked=${this.showOnlySelected}
                  @change=${this.onToggle}
                />
                Limited to selected only
              </label>
            </div>
          </div>
          <ul class="grid grid--standard">
            ${repeat(
              filteredCharacters,
              (c: Character) => c.id,
              (c: Character) => {
                const fieldSlug = slugify(`${c.name}_${c.id}`);
                const images = [c.image, ...c.images.map((x) => x.url)];
                const isSelected = this.deckCharacterIds.includes(c.id);

                return html`
                  <li
                    key=${c.id}
                    class=${cx(
                      'character-item',
                      isSelected && 'character-item--selected'
                    )}
                  >
                    <glk-image-cycler
                      .images=${images}
                      .alt=${c.name}
                    ></glk-image-cycler>
                    <div class="glk-control glk-control--checkbox">
                      <label for="${fieldSlug}" class="glk-control__label">
                        <input
                          type="checkbox"
                          id="${fieldSlug}"
                          class="glk-checkbox"
                          ?checked=${isSelected}
                          @change=${() => this.onToggleCharacter(c.id)}
                        />
                        ${c.name}
                      </label>
                    </div>
                  </li>
                `;
              }
            )}
          </ul>
        </div>
      </div>
    `;
  }

  private initDeckBuilder() {
    const decks = dataStore.getKey('decks') as Deck[];
    const search = window.location.search;
    const params = constructObjectFromSearchParams(search) as any;
    const deckId = params.deck;

    if (!deckId) {
      // Create mode
      return;
    }

    const existingDeck = decks.find((x) => x.id === deckId);
    if (!existingDeck) {
      this.noDeck = true;
      return;
    }

    this.deckId = deckId;
    this.deckName = existingDeck.name;
    this.deckCharacterIds = existingDeck.characterIds;
  }

  private onToggle(event: Event) {
    const t = event.target as HTMLInputElement;
    this.showOnlySelected = t.checked;
  }

  private onUserInput(event: KeyboardEvent) {
    const t = event.target as HTMLInputElement;
    const field = t.name as DeckPageField;
    this[field] = t.value;
  }

  private onToggleCharacter(id: number) {
    const current = new Set(this.deckCharacterIds);
    if (!current.delete(id)) {
      current.add(id);
    }

    this.deckCharacterIds = Array.from(current);
  }

  private dropDeck() {
    let decks = dataStore.getKey('decks') as Deck[];
    decks = decks.filter((x) => x.id !== this.deckId);

    dataStore.set({ decks });
    router.push('/decks');
  }

  private validateForm() {
    const errorMessages = [];
    const deckName = this.deckName && this.deckName.trim();

    if (!deckName) {
      errorMessages.push('Deck name is required.');
    }

    if (!this.deckCharacterIds.length) {
      errorMessages.push('Deck requires at least one character.');
    }

    return { success: errorMessages.length === 0, errorMessages };
  }

  private handleSave() {
    const response = this.validateForm();
    if (!response.success) {
      this.feedback = response.errorMessages.join('\n');
      return;
    }

    this.feedback = '';
    const isCreate = !this.deckId;
    const deckId = this.deckId || generateUniqueId();
    const newDeck = {
      characterIds: this.deckCharacterIds,
      id: deckId,
      name: this.deckName
    };

    let decks = dataStore.getKey('decks') as Deck[];
    decks = isCreate
      ? [...decks, newDeck]
      : decks.map((x) => (x.id === deckId ? newDeck : x));

    dataStore.set({
      decks
    });

    if (isCreate) {
      router.push(`/decks-builder?deck=${deckId}`);
    }
  }

  private onDone() {
    // TODO
    // Warn about unsaved changes?
    router.push('/decks');
  }
}

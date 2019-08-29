import { separateAndCapitalise } from 'ayaka/capitalise';
import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/button';

import { CardBackType } from './enums/CardBackType';
import { MediaSize } from './enums/MediaSize';
import { Deck } from './interfaces/Deck';
import router from './routes';
import controlStyle from './style/control';
import floatLabel from './style/floatLabel';
import { mediaOn } from './utils/mediaOn';
import { dataStore, optsStore } from './utils/storage';

const CARD_BACK_OPTIONS = Object.keys(CardBackType);

@customElement('glk-options')
class Options extends LitElement {
  static get styles() {
    return [
      floatLabel,
      controlStyle,
      css`
        :host {
          margin: 10px;
        }

        .options__title {
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        form {
          width: 50%;
        }
        ${mediaOn(
          MediaSize.XS,
          css`
            form {
              width: 75%;
            }
          `
        )}
        ${mediaOn(
          MediaSize.XXS,
          css`
            form {
              width: 100%;
            }
          `
        )}

        .message {
          color: var(--danger-colour);
          margin: 10px 0;
        }

        .button-block {
          margin: 3rem 0;
        }
      `
    ];
  }

  @property({ type: Array })
  public decks: Deck[] = [];

  @property({ type: Number })
  public startingPairs = 0;

  @property({ type: String })
  public cardBack = CardBackType.subtleDots;

  @property({ type: String })
  public deckId = '';

  @property({ type: Boolean })
  public hideOnMatch = true;

  public firstUpdated() {
    const options = optsStore.get();
    this.decks = dataStore.getKey('decks') as Deck[];

    this.startingPairs = options.startingPairs;
    this.cardBack = options.cardBack;
    this.hideOnMatch = options.hideOnMatch;
    this.deckId = options.deckId;
  }

  public render() {
    const formValid = this.isValidForm();
    const canSave = formValid.success;
    const feedbackMessages = formValid.messages;

    return html`
      <div class="options">
        <h2 class="options__title">Options</h2>
        <form @submit=${this.handleSave}>
          <div class="glk-control has-float-label">
            <label for="startingPairs">Starting Pairs</label>
            <input
              id="startingPairs"
              class="glk-control__input"
              type="number"
              min="1"
              max="26"
              .value=${this.startingPairs}
              @input=${this.onUserInput}
            />
          </div>
          <div class="glk-control has-float-label has-float-label--select">
            <label for="cardBack">Card Back Pattern</label>
            <select
              id="cardBack"
              name="cardBack"
              class="glk-control__input"
              @change=${this.onSelect}
            >
              ${CARD_BACK_OPTIONS.map(
                (op) => html`
                  <option value=${op} ?selected=${op === this.cardBack}
                    >${separateAndCapitalise(op)}</option
                  >
                `
              )}
            </select>
          </div>
          <div class="glk-control glk-control--checkbox">
            <label for="hideOnMatch" class="glk-control__label">
              <input
                type="checkbox"
                id="hideOnMatch"
                class="glk-checkbox"
                ?checked=${this.hideOnMatch}
                @change=${this.onToggle}
              />
              Hide matched pairs
            </label>
          </div>
          <div class="glk-control has-float-label has-float-label--select">
            <label for="deckId">Deck</label>
            <select
              id="deckId"
              name="deckId"
              class="glk-control__input"
              @change=${this.onSelect}
            >
              <option value="" ?selected=${'' === this.deckId}
                >Unrestricted</option
              >
              ${this.decks.map(
                (op) => html`
                  <option value=${op.id} ?selected=${op.id === this.deckId}
                    >${op.name}</option
                  >
                `
              )}
            </select>
          </div>

          <div class="button-block">
            <glk-button
              primary
              type="submit"
              ?disabled=${!canSave}
              @press=${this.handleSave}
            >
              Save
            </glk-button>
          </div>
          ${feedbackMessages
            ? html`
                <div class="message">
                  ${feedbackMessages}
                </div>
              `
            : ''}
        </form>
      </div>
    `;
  }

  private onUserInput(event: KeyboardEvent) {
    const t = event.target as HTMLInputElement;
    const startingPairs = Number(t.value);
    this.startingPairs = startingPairs;
  }

  private onSelect(event: Event) {
    const t = event.target as HTMLSelectElement;
    const field = t.name as 'cardBack' | 'deckId';

    if (field === 'cardBack') {
      this.cardBack = t.value as CardBackType;
    } else if (field === 'deckId') {
      this.deckId = t.value;
    }
  }

  private onToggle(event: Event) {
    const t = event.target as HTMLInputElement;
    this.hideOnMatch = t.checked;
  }

  private isValidForm() {
    const messages = [];
    const validPairs = this.startingPairs >= 1 && this.startingPairs <= 26;
    if (!validPairs) {
      messages.push('Starting pairs must be 1 <= n <= 26');
    }

    const deck = this.decks.find((x) => x.id === this.deckId);
    const validDeck = !deck || deck.characterIds.length >= this.startingPairs;
    if (!validDeck) {
      messages.push(
        'The deck chosen has fewer characters than the number of pairs requested.'
      );
    }

    return {
      messages: messages.join('\r\n'),
      success: validPairs && validDeck
    };
  }

  private handleSave(e: CustomEvent) {
    e.preventDefault();
    const valid = this.isValidForm();
    if (!valid.success) {
      return;
    }

    optsStore.set({
      cardBack: this.cardBack,
      deckId: this.deckId,
      hideOnMatch: this.hideOnMatch,
      startingPairs: this.startingPairs
    });

    router.push('/');
  }
}

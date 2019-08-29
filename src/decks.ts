import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/button';
import './elements/router-link';

import { Deck } from './interfaces/Deck';
import gridStyle from './style/grid';
import { dataStore } from './utils/storage';

@customElement('glk-decks')
class Decks extends LitElement {
  static get styles() {
    return [
      ...gridStyle,
      css`
        :host {
          margin: 10px;
        }

        .decks__title {
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .deck-item {
          --icon-font-size: 1.1rem;
          display: flex;
          align-items: center;
          padding: 5px 0;
          font-size: var(--icon-font-size);
        }
        glk-button {
          margin: 0 5px;
        }
      `
    ];
  }

  @property({ type: Array })
  private decks: Deck[] = [];

  public firstUpdated() {
    this.decks = dataStore.getKey('decks') as Deck[];
  }

  public render() {
    return html`
      <section class="decks">
        <header class="header">
          <h2 class="decks__title">Decks</h2>
          <glk-router-link .href=${'/decks-builder'}
            >Create a new deck</glk-router-link
          >
        </header>

        <div class="deck-view">
          <ul class="grid deck-list">
            ${this.decks.map((deck) => {
              return html`
                <li class="deck-item">
                  <div>
                    <glk-router-link .href=${`/decks-builder?deck=${deck.id}`}
                      >${deck.name}</glk-router-link
                    >
                    <div>${deck.characterIds.length} character(s)</div>
                  </div>
                  <glk-button icon danger @press=${() => this.dropDeck(deck.id)}
                    >❌︎</glk-button
                  >
                </li>
              `;
            })}
          </ul>
        </div>
      </section>
    `;
  }

  private dropDeck(deckId: string) {
    let decks = dataStore.getKey('decks') as Deck[];
    decks = decks.filter((x) => x.id !== deckId);

    dataStore.set({ decks });
    this.decks = decks;
  }
}

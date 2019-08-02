import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/button';
import './elements/card-grid';
import './options';

import { Card } from './interfaces/Card';
import { CardFlip } from './interfaces/CardFlip';
import getData from './utils/characters';
import GameTimer from './utils/GameTimer';

@customElement('glk-app')
class App extends LitElement {
  static get styles() {
    return css`
      :host,
      main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .action-bar {
        display: flex;
        align-items: center;
        background-color: var(--primary-colour);
        padding: 10px 15px;
        box-shadow: 1px 1px 2px 2px var(--shadow-colour);
      }

      .content {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 51px); /* account for action-bar */
      }

      .summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--secondary-colour);
        color: var(--secondary-contrast);
        padding: 5px;
        margin: 10px 5px;
        white-space: pre-line;
      }

      /* Helpers */
      .flex-spacer {
        display: flex;
        flex: 1;
      }

      /* Responsive */
      @media (max-width: 479px) {
        .action-bar {
          flex-direction: column;
        }
        .action-bar > * {
          margin: 5px 0;
        }
        .flex-spacer {
          display: none;
        }
      }
    `;
  }

  @property({ type: Boolean })
  private showOptions = false;

  @property({ type: Number })
  private timer: number = 0;

  @property({ type: Boolean })
  private inGame = false;

  @property({ type: String })
  private timeElapsed = '00m 00s';

  @property({ type: Array })
  private gameSummary: string[] = [];

  @property({ type: Boolean })
  private hasMatch = false;

  @property({ type: Array })
  private pairs: string[] = [];

  @property({ type: Array })
  private choices: string[] = [];

  @property({ type: Array })
  private cards: Card[] = [];

  public render() {
    const pLen = this.pairs.length;
    const pairCount = pLen ? pLen / 2 : 0;
    const hasSummary = this.gameSummary.length > 0;

    return html`
      <main>
        <div class="action-bar">
          ${this.inGame
            ? html`
                <div>Time: ${this.timeElapsed}</div>
              `
            : ''}
          <div class="flex-spacer"></div>
          ${!this.showOptions
            ? html`
                <div>
                  <glk-button
                    primary
                    ?disabled=${this.inGame}
                    @press="${this.newGame}"
                    >New game</glk-button
                  >
                  <glk-button
                    primary
                    ?disabled=${!this.inGame}
                    @press="${() => this.endGame(false)}"
                    >Quit game</glk-button
                  >
                </div>
              `
            : ''}

          <div class="flex-spacer"></div>
          ${this.inGame
            ? html`
                <div>${pairCount} Pairs found</div>
              `
            : ''}
          ${!this.inGame
            ? html`
                <glk-button icon @press=${() => (this.showOptions = true)}
                  >⚙︎</glk-button
                >
              `
            : ''}
        </div>
        ${!this.showOptions
          ? html`
              <div class="content">
                ${hasSummary
                  ? html`
                      <div class="summary">
                        ${this.gameSummary.map(
                          (x) =>
                            html`
                              <div>${x}</div>
                            `
                        )}
                      </div>
                    `
                  : ''}
                <glk-card-grid
                  .cards=${this.cards}
                  .selected=${this.choices}
                  .removed=${this.pairs}
                  ?hasMatch=${this.hasMatch}
                  @flipped="${this.onCardFlip}"
                >
                </glk-card-grid>
              </div>
            `
          : html`
              <glk-options
                @close=${() => (this.showOptions = false)}
              ></glk-options>
            `}
      </main>
    `;
  }

  @property({ type: Function })
  private unsubTimer: () => string = () => '';

  private newGame() {
    this.gameSummary = [];
    this.choices = [];
    this.cards = getData();
    this.inGame = true;
    this.unsubTimer = GameTimer.subscribe((time) => (this.timeElapsed = time));
  }

  private endGame(success = false) {
    const timeElapsed = this.unsubTimer();
    const pairs = this.pairs.length;

    this.inGame = false;
    this.pairs = [];

    // Show all cards
    this.choices = this.cards.map((x) => x.id);
    this.gameSummary = [
      success ? `You found all the pairs!` : 'Quitters always quit.',
      `${pairs} pairs found in ${timeElapsed}`
    ];
  }

  private onCardFlip(event: CustomEvent<CardFlip>) {
    if (this.choices.length === 2) {
      // Prevent interaction while card states are reset
      return;
    }

    const data = event.detail;
    const turnFaceUp = !this.choices.includes(data.cardId);

    if (turnFaceUp) {
      this.choices = [...this.choices, data.cardId];
      this.checkCards();
    }
  }

  private checkCards() {
    if (this.choices.length !== 2) {
      return;
    }

    const characterIds = this.choices.map((x) => {
      const card = this.cards.find((c) => c.id === x);
      if (card) {
        return card.characterId;
      }
    });

    const isMatch = new Set(characterIds).size === 1;
    this.hasMatch = isMatch;

    // Reset or Update based on isMatch result
    clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      if (isMatch) {
        this.pairs = [...this.pairs, ...this.choices];
      }

      // Reset choices
      this.choices = [];
      this.hasMatch = false;
      this.checkGameState();
    }, 1500);
  }

  private checkGameState() {
    const completeGame =
      this.cards.length === this.pairs.length && this.pairs.length !== 0;

    if (completeGame) {
      this.endGame(true);
    }
  }
}

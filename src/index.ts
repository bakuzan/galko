import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/button';
import './elements/card-grid';

import getData from './characters';
import { Card } from './interfaces/Card';
import { CardFlip } from './interfaces/CardFlip';
import GameTimer from './utils/GameTimer';

@customElement('glk-app')
class App extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .action-bar {
        display: flex;
        align-items: center;
        background-color: var(--primary-colour);
        padding: 10px 5px;
        box-shadow: 1px 1px 2px 2px var(--shadow-colour);
      }
      .flex-spacer {
        display: flex;
        flex: 1;
      }
    `;
  }

  @property({ type: Number })
  private timer: number = 0;

  @property({ type: Boolean })
  private inGame = false;

  @property({ type: String })
  private timeElapsed = '00:00';

  @property({ type: Boolean })
  private hasMatch = false;

  @property({ type: Array })
  private pairs: string[] = [];

  @property({ type: Array })
  private choices: string[] = [];

  @property({ type: Array })
  private cards: Card[] = [];

  public render() {
    console.log('App', this.cards, this.choices);
    const pLen = this.pairs.length;
    const pairCount = pLen ? pLen / 2 : 0;

    return html`
      <main>
        <div class="action-bar">
          ${this.inGame
            ? html`
                <div>Time: ${this.timeElapsed}</div>
              `
            : ''}
          <div class="flex-spacer"></div>
          <glk-button primary ?disabled=${this.inGame} @click="${this.newGame}"
            >New game</glk-button
          >
          <glk-button primary ?disabled=${!this.inGame} @click="${this.endGame}"
            >Quit game</glk-button
          >
          <div class="flex-spacer"></div>
          ${this.inGame
            ? html`
                <div>${pairCount} Pairs found.</div>
              `
            : ''}
        </div>
        <glk-card-grid
          .cards=${this.cards}
          .selected=${this.choices}
          .removed=${this.pairs}
          ?hasMatch=${this.hasMatch}
          @flipped="${this.onCardFlip}"
        >
        </glk-card-grid>
      </main>
    `;
  }

  @property({ type: Function })
  private unsubTimer: () => string = () => '';

  private newGame() {
    this.cards = getData();
    this.inGame = true;
    this.unsubTimer = GameTimer.subscribe((time) => (this.timeElapsed = time));
  }

  private endGame(success = false) {
    const timeElapsed = this.unsubTimer();
    const pairs = this.pairs.length;

    this.inGame = false;
    this.pairs = [];

    console.groupCollapsed(`Game ${success ? 'complete' : 'ended'}`);
    console.log('Pairs > ', pairs);
    console.log('Time > ', timeElapsed);
    console.groupEnd();
    // TODO
    // Display a summary.
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

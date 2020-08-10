import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/button';
import './elements/card-grid';
import './elements/streak';

import { MediaSize } from './enums/MediaSize';
import { Card } from './interfaces/Card';
import { CardFlip } from './interfaces/CardFlip';
import { GameResult } from './interfaces/GameResult';
import { Turn } from './interfaces/Turn';
import getData from './utils/characters';
import GameTimer from './utils/GameTimer';
import { mediaOn } from './utils/mediaOn';
import { dataStore } from './utils/storage';

const smallStyles = css`
  .game-bar {
    --even-game-bar-width: 0px;
    flex-direction: column;
  }
  .game-bar > * {
    margin: 5px 0;
  }
  .game-bar__data {
    justify-content: center;
  }
  .content__streak {
    justify-content: space-between;
    width: 100%;
  }
  .flex-spacer {
    display: none;
  }

  .for-small {
    display: block;
  }
  .for-large {
    display: none;
  }
`;

@customElement('glk-home')
class Home extends LitElement {
  static get styles() {
    return css`
      :host {
        --even-game-bar-width: 211px;
        --game-bar-height: 56px;

        display: flex;
        flex-direction: column;
        min-height: calc(100vh - var(--action-bar-height));
      }

      .game-bar {
        display: flex;
        align-items: center;
        min-height: var(--game-bar-height);
        padding: 5px;
        box-sizing: border-box;
      }
      .game-bar__data {
        display: flex;
        min-width: var(--even-game-bar-width);
        margin: 2px 0;
      }

      .content {
        display: flex;
        flex-direction: column;
        min-height: calc(
          100vh - var(--action-bar-height) - var(--game-bar-height)
        );
      }
      .content__streak {
        display: flex;
        justify-content: flex-end;
        min-height: 46px;
        min-width: var(--even-game-bar-width);
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

      .for-large {
        display: block;
      }
      .for-small {
        display: none;
      }

      /* Responsive */
      ${mediaOn(MediaSize.XS, smallStyles)}
      ${mediaOn(MediaSize.XXS, smallStyles)}
    `;
  }

  @property({ type: Array })
  public turns: Turn[] = [];

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
    const currentStreak = this.getCurrentStreak();
    const gameData = (size: string) => html`
      <div class="${size}">
        <div class="game-bar__data">${this.timeElapsed}</div>
        <div class="game-bar__data">${pairCount} Pairs found</div>
      </div>
    `;

    return html`
      <div class="game-bar">
        ${this.inGame ? gameData('for-large') : ''}
        <div class="flex-spacer"></div>
        <div>
          <glk-button primary ?disabled=${this.inGame} @press="${this.newGame}"
            >New game</glk-button
          >
          <glk-button
            primary
            ?disabled=${!this.inGame}
            @press="${() => this.endGame(false)}"
            >Quit game</glk-button
          >
        </div>
        <div class="flex-spacer"></div>
        ${this.inGame
          ? html`
              <div class="content__streak">
                ${gameData('for-small')}
                <glk-streak streak=${currentStreak}></glk-streak>
              </div>
            `
          : ''}
      </div>

      <div class="content">
        ${hasSummary
          ? html`
              <div class="summary">
                ${this.gameSummary.map((x) => html` <div>${x}</div> `)}
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
    `;
  }

  @property({ type: Function })
  private unsubTimer: () => number = () => 0;

  private newGame() {
    this.gameSummary = [];
    this.turns = [];
    this.choices = [];
    this.cards = getData();
    this.inGame = true;
    this.unsubTimer = GameTimer.subscribe((time) => (this.timeElapsed = time));
  }

  private endGame(success = false) {
    const time = this.unsubTimer();
    const pairs = this.pairs.length / 2;
    const turns = this.turns.length;
    const longestStreak = this.getLongestStreak();

    this.inGame = false;
    this.pairs = [];
    this.turns = [];

    // Show all cards
    this.choices = this.cards.map((x) => x.id);
    this.gameSummary = [
      success ? `You found all the pairs!` : 'Quitters always quit.',
      `${pairs} pairs found in ${GameTimer.formatTime(time)}`,
      `${longestStreak} was your longest match streak`
    ];

    if (success) {
      const scores = dataStore.getKey('history') as GameResult[];
      dataStore.set({
        history: [
          ...scores,
          {
            datetime: new Date().getTime(),
            longestStreak,
            pairs,
            timeElapsed: time,
            turns
          }
        ]
      });
    }
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

    const currentTurns = this.turns.slice(0);
    const isMatch = new Set(characterIds).size === 1;
    this.hasMatch = isMatch;

    // Reset or Update based on isMatch result
    clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      if (isMatch) {
        this.pairs = [...this.pairs, ...this.choices];
      }

      this.turns = [
        ...currentTurns,
        { number: currentTurns.length + 1, isMatch }
      ];

      // Reset
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

  private getCurrentStreak() {
    const result = this.turns
      .slice(0)
      .reverse()
      .reduce(
        (p, c) => {
          const isBroken = p.isBroken || !c.isMatch;
          const streak = isBroken ? p.streak : p.streak + 1;

          return { streak, isBroken };
        },
        { streak: 0, isBroken: false }
      );

    return result.streak;
  }

  private getLongestStreak() {
    const result = this.turns.slice(0).reduce(
      (p, c) => {
        const streak = c.isMatch ? p.streak + 1 : 0;
        return { streak, longest: streak > p.longest ? streak : p.longest };
      },
      { longest: 0, streak: 0 }
    );

    return result.longest;
  }
}

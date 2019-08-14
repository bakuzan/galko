import { css, customElement, html, LitElement, property } from 'lit-element';

import { MediaSize } from './enums/MediaSize';
import { GameResultView } from './interfaces/GameResult';
import formatDate from './utils/formatDate';
import GameTimer from './utils/GameTimer';
import { mediaOn } from './utils/mediaOn';
import padNumber from './utils/pad';
import { scoreStore } from './utils/storage';

@customElement('glk-scores')
class Scores extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          margin: 10px;
        }

        .list {
          display: grid;
          grid-auto-columns: 1fr;

          padding: 0;
          list-style-type: none;
        }

        .history {
          padding: 5px;
        }
        .history__header {
          display: flex;
          justify-content: space-between;
        }
        ${mediaOn(
          MediaSize.XS,
          css`
            .history__header {
              flex-direction: column;
            }
          `
        )}

        .history__title {
          font-size: 1.25rem;
          margin: 15px 0;
        }
        .history__item {
          display: grid;
          grid-template-columns: 50px 0.25fr 50px 90px 80px;
          padding: 5px 0;
        }
        .history__item--no-items {
          display: flex;
        }
        .history__item:not(.history__item--header):not(.history__item--no-items):hover {
          background-color: var(--secondary-colour);
        }

        /* Helpers */
        .right {
          text-align: right;
        }
      `
    ];
  }

  @property({ type: Array })
  private history: GameResultView[] = [];

  public firstUpdated() {
    const scores = scoreStore.get();

    this.history = scores.map((x) => ({
      ...x,
      date: formatDate(x.datetime),
      timeElapsedDisplay: GameTimer.formatTime(x.timeElapsed)
    }));
  }

  public render() {
    return html`
      <section class="history">
        <header class="history__header">
          <h2 class="history__title">Game history</h2>
        </header>
        <ul class="list">
          ${this.history.length === 0
            ? html`
                <li class="history__item history__item--no-items">
                  No history found.
                </li>
              `
            : html`
                <li class="history__item history__item--header">
                  <div>#</div>
                  <div>Date</div>
                  <div class="right">Pairs</div>
                  <div class="right">Time</div>
                  <div class="right">Streak</div>
                </li>
              `}
          ${this.history.map(
            (item, i) => html`
              <li class="history__item">
                <div>${this.itemNumber(i)}</div>
                <div>${item.date}</div>
                <div class="right">${item.pairs}</div>
                <div class="right">${item.timeElapsedDisplay}</div>
                <div class="right">${item.longestStreak}</div>
              </li>
            `
          )}
        </ul>
      </section>
    `;
  }

  private itemNumber(num: number): string {
    return `#${padNumber(num + 1, 3)}`;
  }
}

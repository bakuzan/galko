import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/sort-icon';

import { MediaSize } from './enums/MediaSize';
import { GameResultView } from './interfaces/GameResult';
import formatDate from './utils/formatDate';
import GameTimer from './utils/GameTimer';
import { mediaOn } from './utils/mediaOn';
import padNumber from './utils/pad';
import { scoreStore } from './utils/storage';

type ResultField = 'timeElapsed' | 'datetime' | 'pairs' | 'longestStreak';

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

        .history__title {
          font-size: 1.25rem;
          margin: 15px 0;
        }
        .history__item {
          display: grid;
          grid-template-columns: 50px minmax(180px, 0.25fr) 75px 90px 80px;
          padding: 5px 0;
        }
        .history__item--no-items {
          display: flex;
        }
        .history__item:not(.history__item--header):not(.history__item--no-items):hover {
          background-color: var(--secondary-colour);
        }

        .column-header {
          display: flex;

          align-items: center;
        }
        .column-header__button {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          background: none;
          padding: 8px 5px;
          border: none;
          text-align: left;
          cursor: pointer;
        }
        .column-header__button:hover {
          background-color: hsl(0, 0%, 95%);
        }

        .align-right {
          text-align: right;
        }

        /* Repsonsive */
        ${mediaOn(
          MediaSize.SM,
          css`
            .history__item {
              grid-template-columns: 50px 160px 75px 80px 80px;
            }
          `
        )}
        ${mediaOn(
          MediaSize.XS,
          css`
            .history__header {
              flex-direction: column;
            }
            .history__item {
              grid-template-columns: 50px 120px 60px 80px 60px;
            }
          `
        )}
      `
    ];
  }

  @property({ type: Array })
  private sortField: ResultField = 'timeElapsed';

  @property({ type: Array })
  private sortOrder: number = 1;

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
    const items = this.history.sort((a, b) => {
      const bv = b[this.sortField];
      const av = a[this.sortField];
      return this.sortOrder === 1 ? av - bv : bv - av;
    });

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
                  <div class="column-header">#</div>
                  <div class="column-header">
                    <button
                      type="button"
                      class="column-header__button"
                      @click=${() => this.handleSort('datetime')}
                    >
                      Date
                      <glk-sort-icon
                        ?show=${this.sortField === 'datetime'}
                        .direction=${this.sortOrder}
                      ></glk-sort-icon>
                    </button>
                  </div>
                  <div class="column-header">
                    <button
                      type="button"
                      class="column-header__button"
                      @click=${() => this.handleSort('pairs')}
                    >
                      Pairs
                      <glk-sort-icon
                        ?show=${this.sortField === 'pairs'}
                        .direction=${this.sortOrder}
                      ></glk-sort-icon>
                    </button>
                  </div>
                  <div class="column-header">
                    <button
                      type="button"
                      class="column-header__button"
                      @click=${() => this.handleSort('timeElapsed')}
                    >
                      Time
                      <glk-sort-icon
                        ?show=${this.sortField === 'timeElapsed'}
                        .direction=${this.sortOrder}
                      ></glk-sort-icon>
                    </button>
                  </div>
                  <div class="column-header">
                    <button
                      type="button"
                      class="column-header__button"
                      @click=${() => this.handleSort('longestStreak')}
                    >
                      Streak
                      <glk-sort-icon
                        ?show=${this.sortField === 'longestStreak'}
                        .direction=${this.sortOrder}
                      ></glk-sort-icon>
                    </button>
                  </div>
                </li>
              `}
          ${items.map(
            (item, i) => html`
              <li class="history__item">
                <div>${this.itemNumber(i)}</div>
                <div>${item.date}</div>
                <div class="align-right">${item.pairs}</div>
                <div class="align-right">${item.timeElapsedDisplay}</div>
                <div class="align-right">${item.longestStreak}</div>
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

  private handleSort(field: ResultField) {
    const toggle = this.sortField === field;

    if (toggle) {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    }

    this.sortField = field;
  }
}

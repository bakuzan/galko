import formatDateTimeForDisplay from 'ayaka/formatDateTimeForDisplay';
import padNumber from 'ayaka/padNumber';
import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/sort-icon';

import { MediaSize } from './enums/MediaSize';
import { GameResult, GameResultView } from './interfaces/GameResult';
import GameTimer from './utils/GameTimer';
import { mediaOn } from './utils/mediaOn';
import orderGameHistory, { ResultField } from './utils/orderGameHistory';
import { dataStore } from './utils/storage';

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
          grid-template-columns: 50px minmax(180px, 0.25fr) 75px 90px 80px 90px;
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
          MediaSize.XS,
          css`
            .history__item {
              grid-template-columns: 50px 160px 75px 80px 80px 90px;
            }
          `
        )}
        ${mediaOn(
          MediaSize.XXS,
          css`
            .history__header {
              flex-direction: column;
            }
            .history__item {
              grid-template-columns: 50px 120px 60px 80px 60px 90px;
            }
          `
        )}
      `
    ];
  }

  @property({ type: Array })
  private sortField: ResultField = 'matchAttemptsRatio';

  @property({ type: Array })
  private sortOrder: number = -1;

  @property({ type: Array })
  private history: GameResultView[] = [];

  public firstUpdated() {
    const scores = dataStore.getKey('history') as GameResult[];

    this.history = scores.map((x) => ({
      ...x,
      date: formatDateTimeForDisplay(x.datetime),
      matchAttemptsRatio: x.turns !== 0 ? x.pairs / x.turns : 0.0,
      timeElapsedDisplay: GameTimer.formatTime(x.timeElapsed)
    }));
  }

  public render() {
    const items = orderGameHistory(
      this.history,
      this.sortField,
      this.sortOrder
    );

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
                  <div class="column-header">
                    <button
                      type="button"
                      class="column-header__button"
                      @click=${() => this.handleSort('matchAttemptsRatio')}
                    >
                      Match/Attempts Ratio
                      <glk-sort-icon
                        ?show=${this.sortField === 'matchAttemptsRatio'}
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
                <div>
                  ${item.date}
                </div>
                <div class="align-right">${item.pairs}</div>
                <div class="align-right">${item.timeElapsedDisplay}</div>
                <div class="align-right">${item.longestStreak}</div>
                <div class="align-right">
                  ${item.matchAttemptsRatio.toFixed(2)}
                </div>
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

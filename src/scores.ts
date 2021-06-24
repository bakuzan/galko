import { separateAndCapitalise } from 'ayaka/capitalise';
import formatDateTimeForDisplay from 'ayaka/formatDateTimeForDisplay';
import padNumber from 'ayaka/padNumber';
import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/sort-icon';

import { GameResult, GameResultView } from './interfaces/GameResult';
import GameTimer from './utils/GameTimer';

import orderGameHistory, {
  ResultField,
  resultFields
} from './utils/orderGameHistory';
import { dataStore } from './utils/storage';
import controlStyle from './style/control';
import floatLabel from './style/floatLabel';

@customElement('glk-scores')
class Scores extends LitElement {
  static get styles() {
    return [
      floatLabel,
      controlStyle,
      css`
        :host {
          margin: 10px;
        }

        .list {
          width: 100%;
          max-width: 750px;
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

        .history__controls {
          display: none;
        }

        .history__item--no-items {
          display: flex;
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
        td,
        th {
          vertical-align: top;
        }

        td {
          padding: 5px;
        }

        @media only screen and (max-width: 760px),
          (min-device-width: 768px) and (max-device-width: 1024px) {
          /* Force table to not be like tables anymore */
          table,
          thead,
          tbody,
          th,
          td,
          tr {
            display: block;
          }

          /* Hide table headers (but not display: none;, for accessibility) */
          thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
          }

          tr {
            border: 1px solid var(--table-border-colour);
          }

          td {
            /* Behave  like a "row" */
            border: none;
            border-bottom: 1px solid var(--table-cell-border-colour);
            position: relative;
            padding-left: 40%;
          }

          td:before {
            /* Now like a table header */
            position: absolute;
            /* Top/left values mimic padding */
            // top: 6px;
            left: 6px;
            width: 35%;
            padding-right: 10px;
            white-space: nowrap;
            text-align: right;
          }

          /* Label the data */
          td:before {
            content: attr(column-title);
          }

          td[column-title='Rank'] {
            background-color: var(--secondary-colour);
            color: var(--secondary-contrast);
          }

          .history__controls {
            display: block;
          }
        }
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
    const sortOptions = Array.from(resultFields);
    const items = orderGameHistory(
      this.history,
      this.sortField,
      this.sortOrder
    );

    return html`
      <section class="history">
        <header class="history__header">
          <h2 class="history__title">Game history</h2>
          <p>${items.length} games</p>
        </header>
        <div class="history__controls">
          <div class="glk-control has-float-label has-float-label--select">
            <label for="cardBack">Sort on field</label>
            <select
              id="sortField"
              name="sortField"
              class="glk-control__input"
              @change=${(e: Event) => {
                const t = e.currentTarget as HTMLSelectElement;
                this.handleSort(
                  resultFields.find((x) => x === t.value) ?? this.sortField // Ham-handed way to force it
                );
              }}
            >
              ${sortOptions.map(
                (op) => html`
                  <option value=${op} ?selected=${op === this.sortField}>
                    ${separateAndCapitalise(op)}
                  </option>
                `
              )}
            </select>
          </div>
        </div>
        <table class="list">
          <thead>
            <tr class="history__item history__item--header">
              <th class="column-header">#</th>
              <th class="column-header">
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
              </th>
              <th class="column-header">
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
              </th>
              <th class="column-header">
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
              </th>
              <th class="column-header">
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
              </th>
              <th class="column-header">
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
              </th>
            </tr>
          </thead>
          <tbody>
            ${items.map(
              (item, i) => html`
                <tr class="history__item">
                  <td column-title="Rank">${this.itemNumber(i)}</td>
                  <td column-title="Date">${item.date}</td>
                  <td column-title="Pairs" class="align-right">
                    ${item.pairs}
                  </td>
                  <td column-title="Time" class="align-right">
                    ${item.timeElapsedDisplay}
                  </td>
                  <td column-title="Streak" class="align-right">
                    ${item.longestStreak}
                  </td>
                  <td
                    column-title="M/A"
                    title="Match / Attempts Ratio"
                    class="align-right"
                  >
                    ${item.matchAttemptsRatio.toFixed(2)}
                  </td>
                </tr>
              `
            )}
          </tbody>
        </table>
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

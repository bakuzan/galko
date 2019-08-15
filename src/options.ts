import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/button';

import { CardBackType } from './enums/CardBackType';
import { MediaSize } from './enums/MediaSize';
import router from './routes';
import floatLabel from './style/floatLabel';
import { separateAndCapitalise } from './utils/capitalise';
import { mediaOn } from './utils/mediaOn';
import { optsStore } from './utils/storage';

const CARD_BACK_OPTIONS = Object.keys(CardBackType);

@customElement('glk-options')
class Options extends LitElement {
  static get styles() {
    return [
      floatLabel,
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
          MediaSize.SM,
          css`
            form {
              width: 75%;
            }
          `
        )}
        ${mediaOn(
          MediaSize.XS,
          css`
            form {
              width: 100%;
            }
          `
        )}

        .glk-control {
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
        }
        .glk-control--checkbox {
          display: flex;
          min-height: 35px;
          max-height: 45px;
          flex: 1;
          margin-top: 10px;
        }
        .glk-control__label {
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex: 0 1;
          padding: 2px;
          padding-left: 25px;
          cursor: pointer;
        }
        .glk-checkbox {
          /* For screenreader */
          border: 0;
          /*clip: rect(0 0 0 0);*/
          height: 1px;
          margin: -1px;
          overflow: visible;
          padding: 0;
          position: absolute;
          top: 1px;
          left: 8px;
          width: 1px;
          -webkit-appearance: none;
          /* For screenreader */
          transition: all 0.3s;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .glk-checkbox::before,
        .glk-checkbox:checked::before {
          color: #000;
          transition: all 0.3s;
          cursor: pointer;
          z-index: 10;
        }
        .glk-checkbox::before {
          content: '\u2610';
          font-size: 2em;
          width: 20px;
          height: 20px;
          margin: 0 5px;
        }
        ,
        .glk-checkbox:disabled::before {
          content: '\u274c';
          color: #666;
          cursor: default;
        }
        .glk-checkbox:checked::before {
          content: '\u2611';
          color: #0f0;
        }

        .button-block {
          margin: 3rem 0;
        }
      `
    ];
  }

  @property({ type: Number })
  public startingPairs = 0;

  @property({ type: String })
  public cardBack = CardBackType.subtleDots;

  @property({ type: Boolean })
  public hideOnMatch = true;

  public firstUpdated() {
    const options = optsStore.get();

    this.startingPairs = options.startingPairs;
    this.cardBack = options.cardBack;
    this.hideOnMatch = options.hideOnMatch;
  }

  public render() {
    const canSave = this.isValidForm();

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
    this.cardBack = t.value as CardBackType;
  }

  private onToggle(event: Event) {
    const t = event.target as HTMLInputElement;
    this.hideOnMatch = t.checked;
  }

  private isValidForm() {
    return this.startingPairs >= 1 && this.startingPairs <= 26;
  }

  private handleSave(e: CustomEvent) {
    e.preventDefault();
    if (!this.isValidForm()) {
      return;
    }

    optsStore.set({
      cardBack: this.cardBack,
      hideOnMatch: this.hideOnMatch,
      startingPairs: this.startingPairs
    });

    router.push('/');
  }
}

import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/button';

import { CardBackType } from './enums/CardBackType';
import floatLabel from './style/floatLabel';
import { separateAndCapitalise } from './utils/capitalise';
import { optsStore } from './utils/storage';

const CARD_BACK_OPTIONS = Object.keys(CardBackType).map(
  (op) => html`
    <option value=${op}>${separateAndCapitalise(op)}</option>
  `
);

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

        .glk-control {
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
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

  public firstUpdated() {
    const options = optsStore.get();
    this.startingPairs = options.startingPairs;
    this.cardBack = options.cardBack;
  }

  public render() {
    const canSave = this.isValidForm();

    return html`
      <div class="options">
        <h1 class="options__title">Options</h1>
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
              .value=${this.cardBack}
              @change=${this.onSelect}
            >
              ${CARD_BACK_OPTIONS}
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
      startingPairs: this.startingPairs
    });

    const event = new CustomEvent('close');
    this.dispatchEvent(event);
  }
}

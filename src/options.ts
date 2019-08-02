import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/button';

import floatLabel from './style/floatLabel';
import { optsStore } from './utils/storage';

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
        }

        .button-block {
          margin: 1rem 0;
        }
      `
    ];
  }

  @property({ type: Number })
  public startingPairs = 0;

  public firstUpdated() {
    const options = optsStore.get();
    this.startingPairs = options.startingPairs;
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
              value=${this.startingPairs}
              @input=${this.onUserInput}
            />
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
    this.startingPairs = optsStore.set({ startingPairs }).startingPairs;
  }

  private isValidForm() {
    return this.startingPairs >= 1 && this.startingPairs <= 26;
  }

  private handleSave(e: CustomEvent) {
    e.preventDefault();
    if (!this.isValidForm()) {
      return;
    }

    const event = new CustomEvent('close');
    this.dispatchEvent(event);
  }
}

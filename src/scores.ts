import { css, customElement, html, LitElement } from 'lit-element';

import { scoreStore } from './utils/storage';

@customElement('glk-scores')
class Scores extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          margin: 10px;
        }
      `
    ];
  }

  public firstUpdated() {
    const scores = scoreStore.get();

    console.log('get scores for a scoreStore', scores);
  }

  public render() {
    return html`
      <div class="scores">
        Under construction...
      </div>
    `;
  }
}

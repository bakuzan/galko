import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('glk-counter')
class Counter extends LitElement {
  static get styles() {
    return css`
      #root {
        text-align: center;
      }
    `;
  }

  @property({ type: String })
  private value = '';

  public render() {
    return html`
      <div id="root">
        <button @click="${this.handleClickDown}">Decrement</button>
        <span>${this.value}</span>
        <button @click="${this.handleClickUp}">Increment</button>
      </div>
    `;
  }

  private handleClickDown() {
    this.dispatchEvent(new CustomEvent('decrement'));
  }

  private handleClickUp() {
    this.dispatchEvent(new CustomEvent('increment'));
  }
}

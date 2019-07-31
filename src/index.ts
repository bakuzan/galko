import { customElement, html, LitElement, property } from 'lit-element';
import './counter';

@customElement('hello-world')
class HelloWorld extends LitElement {
  @property({ type: Number })
  private value = 0;

  public render() {
    return html`
      <glk-counter
        @increment="${this.handleIncrement}"
        @decrement="${this.handleDecrement}"
        value="${this.value}"
      ></glk-counter>
    `;
  }

  private handleIncrement() {
    this.value += 1;
  }

  private handleDecrement() {
    this.value -= 1;
  }
}

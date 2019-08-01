import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('glk-button')
class Button extends LitElement {
  static get styles() {
    return css`
      .button {
        font-family: var(--font-family);
        font-size: var(--font-size);
        background: none;
        border: none;
        box-shadow: 1px 1px 2px 0px var(--shadow-colour),
          0px 0px 1px 0px var(--shadow-colour);
        padding: 5px 10px;
        margin: 0 2px;
        cursor: pointer;
      }
      .button:hover {
        background-color: hsl(0, 0%, 95%);
      }

      .button--primary {
        background-color: var(--secondary-colour);
        color: var(--secondary-contrast);
      }
      .button--primary:hover {
        background-color: var(--secondary-colour-hovered);
      }

      .button:disabled {
        background-color: var(--disabled-colour);
        cursor: default;
      }
    `;
  }

  @property({ type: Boolean })
  public primary = false;

  @property({ type: Boolean })
  public disabled = false;

  public render() {
    const btnClass = ['button', this.primary && 'button--primary']
      .filter((x) => !!x)
      .join(' ');

    return html`
      <button
        type="button"
        class="${btnClass}"
        ?disabled=${this.disabled}
        @click="${this.handleClick}"
      >
        <slot></slot>
      </button>
    `;
  }

  private handleClick() {
    const event = new CustomEvent('click', {
      bubbles: true,
      composed: true,
      detail: null
    });

    this.dispatchEvent(event);
  }
}

import { CardFlip } from 'interfaces/CardFlip';
import { customElement, html, LitElement, property } from 'lit-element';
import style from './style';

@customElement('glk-card')
class Card extends LitElement {
  static get styles() {
    return style;
  }

  @property({ type: Boolean })
  public isFaceUp = false;

  @property({ type: String })
  public cardId = '';

  @property({ type: String })
  public name = '';

  @property({ type: String })
  public image = null;

  @property({ type: Number })
  public width = 103;

  @property({ type: Number })
  public height = 160;

  public render() {
    return html`
      <button
        type="button"
        class="card card--clickable ${this.isFaceUp ? 'card--touched' : ''}"
        @click="${this.handleClick}"
      >
        <div class="card__axis">
          <div class="card__front">
            <img
              src=${this.image}
              alt=${this.name}
              width=${this.width}
              height=${this.height}
            />
          </div>
          <div class="card__back"></div>
        </div>
      </button>
    `;
  }

  private handleClick() {
    const event = new CustomEvent<CardFlip>('flipped', {
      bubbles: true,
      composed: true,
      detail: {
        cardId: this.cardId
      }
    });

    this.dispatchEvent(event);
  }
}

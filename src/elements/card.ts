import { CardFlip } from '@/interfaces/CardFlip';
import { customElement, html, LitElement, property } from 'lit-element';


import style from '@/style/card';
import { optsStore } from '@/utils/storage';
import './card-back';

@customElement('glk-card')
class Card extends LitElement {
  static get styles() {
    return style;
  }

  @property({ type: Boolean })
  public isFaceUp = false;

  @property({ type: Boolean })
  public isHidden = false;

  @property({ type: Boolean })
  public shouldHide = true;

  @property({ type: String })
  public cardId = '';

  @property({ type: String })
  public name = '';

  @property({ type: String })
  public image = '';

  @property({ type: String })
  public cardBack = '';

  public firstUpdated() {
    const opts = optsStore.get();
    this.shouldHide = opts.hideOnMatch;
  }

  public render() {
    const hideCard = this.isHidden && this.shouldHide;
    const leaveFlipped = this.isHidden && !this.shouldHide;

    if (hideCard) {
      return html``;
    }

    const isFlipped = this.isFaceUp || leaveFlipped;
    const image = this.image
      ? this.image.slice(0).replace(/\.jpg/, 't.jpg')
      : null;

    return html`
      <button
        type="button"
        class="card card--clickable ${isFlipped ? 'card--touched' : ''}"
        @click=${isFlipped ? null : this.handleClick}
      >
        <div class="card__axis">
          <div class="card__front">
            <img
              src=${image}
              alt=${this.name}
              class="card__image"
            />
          </div>
          <div class="card__back">
            <glk-card-back .image=${this.cardBack}></glk-card-back>
          </div>
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

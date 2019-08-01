import { Card } from 'interfaces/Card';
import { css, customElement, html, LitElement, property } from 'lit-element';
import '../card';
import baseAnimationStyle from './style';

@customElement('glk-card-grid')
class CardGrid extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, 103px);
        grid-auto-rows: 1fr;
        grid-gap: 16px;
        padding: 16px;
        width: calc(100% - 32px);

        /* Centering */
        justify-content: center;
        min-width: 400px;
        max-width: 80%;
        margin: auto;
      }
    `;
  }

  @property({ type: Array })
  public cards: Card[] = [];

  @property({ type: Array })
  public selected: string[] = [];

  @property({ type: Array })
  public removed: string[] = [];

  @property({ type: Boolean })
  private hasMatch = false;

  public render() {
    const hasPair = this.selected.length === 2;

    return html`
      ${baseAnimationStyle}
      ${hasPair
        ? html`
            <style>
              .glk-card--flipped::before {
                animation-play-state: running;
                /* Bad match specific */
                content: '❌︎';
                color: var(--danger-colour);
                left: -5px;
              }
              .glk-card--matched::before {
                content: '✓︎';
                color: var(--success-colour);
                left: 0;
                font-size: 8.5rem;
              }
            </style>
          `
        : ''}
      ${this.cards.map((card: Card) => {
        const isHidden = this.removed.includes(card.id);
        const isFlipped = this.selected.includes(card.id);
        const classes = [
          isFlipped ? 'glk-card--flipped' : '',
          isFlipped && this.hasMatch ? 'glk-card--matched' : ''
        ].join(' ');

        return html`
          <glk-card
            class="${classes}"
            cardId=${card.id}
            name=${card.name}
            image=${card.image}
            ?isFaceUp=${isFlipped}
            ?isHidden=${isHidden}
          ></glk-card>
        `;
      })}
    `;
  }
}

import { css, customElement, html, LitElement, property } from 'lit-element';
import './card';

import { MediaSize } from '@/enums/MediaSize';
import { Card } from '@/interfaces/Card';
import baseAnimationStyle from '@/style/cardGrid';
import getCardBackground from '@/utils/getCardBackground';
import { mediaOn } from '@/utils/mediaOn';
import { optsStore } from '@/utils/storage';

@customElement('glk-card-grid')
class CardGrid extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: grid;
          grid-template-columns: repeat(auto-fit, var(--card-width));
          grid-auto-rows: 1fr;
          grid-gap: 16px;
          padding: 16px;
          width: calc(100% - 32px);

          /* Centering */
          justify-content: center;
          min-width: 400px;
          max-width: 95%;
          margin: auto;
        }

        ${mediaOn(
          MediaSize.XXS,
          css`
            :host {
              justify-content: flex-start;
              grid-gap: 6px;
              padding: 4px;

              min-width: 250px;
              max-width: 98%;
              margin-top: 0px;
            }
          `
        )}
      `,
      baseAnimationStyle
    ];
  }

  @property({ type: Array })
  public cards: Card[] = [];

  @property({ type: Array })
  public selected: string[] = [];

  @property({ type: Array })
  public removed: string[] = [];

  @property({ type: Boolean })
  private hasMatch = false;

  @property({ type: String })
  private cardBack = '';

  public firstUpdated() {
    const opts = optsStore.get();
    this.cardBack = getCardBackground(opts.cardBack);
  }

  public render() {
    const hasPair = this.selected.length === 2;

    return html`
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
            .image=${card.image}
            .cardBack=${this.cardBack}
            ?isFaceUp=${isFlipped}
            ?isHidden=${isHidden}
          ></glk-card>
        `;
      })}
    `;
  }
}

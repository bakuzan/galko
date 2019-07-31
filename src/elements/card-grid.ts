import { Card } from 'interfaces/Card';
import { css, customElement, html, LitElement, property } from 'lit-element';
import './card';

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
      }
    `;
  }

  @property({ type: Array })
  public cards: Card[] = [];

  @property({ type: Array })
  public selected: string[] = [];

  public render() {
    return html`
      ${this.cards.map(
        (card: Card) => html`
          <glk-card
            cardId=${card.id}
            name=${card.name}
            image=${card.image}
            ?is-face-up=${this.selected.includes(card.id)}
          ></glk-card>
        `
      )}
    `;
  }
}

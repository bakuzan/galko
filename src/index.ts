import { css, customElement, html, LitElement, property } from 'lit-element';
import './elements/card-grid';
import { Card } from './interfaces/Card';
import { CardFlip } from './interfaces/CardFlip';

@customElement('glk-app')
class App extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `;
  }

  @property({ type: Array })
  private pairs: Card[] = [];

  @property({ type: Array })
  private choices: string[] = [];

  @property({ type: Array })
  private cards: Card[] = Array(10)
    .fill(null)
    .map((_, i) => ({
      characterId: 1,
      id: `${i + 1}`,
      image: 'https://i.imgur.com/u7va11Dt.jpg',
      name: 'Ainz Ooal Gown'
    }));

  public render() {
    console.log('App', this.cards, this.choices);
    return html`
      <glk-card-grid
        .cards=${this.cards}
        .selected=${this.choices}
        @flipped="${this.onCardFlip}"
      >
      </glk-card-grid>
    `;
  }

  private onCardFlip(event: CustomEvent<CardFlip>) {
    const data = event.detail;
    const isFaceUp = this.choices.includes(data.cardId);

    if (isFaceUp) {
      this.choices = [...this.choices, data.cardId];
    } else {
      this.choices = this.choices.filter((x) => x === data.cardId);
    }

    this.checkCards();
  }

  private checkCards() {
    if (this.choices.length !== 2) {
      return;
    }

    const characterIds = this.choices.map((x) => {
      const card = this.cards.find((c) => c.id === x);
      if (card) {
        return card.characterId;
      }
    });

    const isMatch = new Set(characterIds).size === 1;
    if (isMatch) {
      this.pairs = [
        ...this.pairs,
        ...this.cards.filter((x) => this.choices.some((c) => c === x.id))
      ];

      this.cards = this.cards.filter(
        (x) => !this.choices.some((co) => co === x.id)
      );
    }

    // Reset choices
    this.choices = [];
  }
}

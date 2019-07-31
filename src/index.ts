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

  @property({ type: Number })
  private timer: number = 0;

  @property({ type: Boolean })
  private hasMatch = false;

  @property({ type: Array })
  private pairs: string[] = [];

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
        .removed=${this.pairs}
        ?hasMatch=${this.hasMatch}
        @flipped="${this.onCardFlip}"
      >
      </glk-card-grid>
    `;
  }

  private onCardFlip(event: CustomEvent<CardFlip>) {
    const data = event.detail;
    const turnFaceUp = !this.choices.includes(data.cardId);
    console.log(this.choices, data.cardId);
    if (turnFaceUp) {
      this.choices = [...this.choices, data.cardId];
      this.checkCards();
    }

    // else {
    //   this.choices = this.choices.filter((x) => x !== data.cardId);
    // }
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
    this.hasMatch = isMatch;

    clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      if (isMatch) {
        this.pairs = [...this.pairs, ...this.choices];
      }

      // Reset choices
      this.choices = [];
      this.hasMatch = false;
    }, 1500);
  }
}

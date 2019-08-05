import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('glk-card-back')
class CardBack extends LitElement {
  static get styles() {
    return css`
      :host {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px;
        box-sizing: border-box;
      }

      .card-back__pattern {
        width: 100%;
        height: 100%;
        border-radius: 0.3rem;
      }
    `;
  }

  @property({ type: String })
  public image: string = '';

  public render() {
    return html`
      <style>
        .card-back__pattern {
          background: url(${this.image});
        }
      </style>
      <div class="card-back__pattern"></div>
    `;
  }
}

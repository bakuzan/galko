import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('glk-sort-icon')
class SortIcon extends LitElement {
  static get styles() {
    return css`
      .icon {
        display: inline-block;
        margin: 0 5px;
      }
    `;
  }

  @property({ type: Boolean })
  public show: boolean = false;

  @property({ type: Number })
  public direction: number = 0;

  public render() {
    if (!this.direction || !this.show) {
      return html``;
    }

    const icon = this.direction === 1 ? '\u25B2\uFE0E' : '\u25BC\uFE0E';

    return html`
      <span class="icon">${icon}</span>
    `;
  }
}

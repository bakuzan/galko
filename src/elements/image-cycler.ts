import { ImageSize } from '@/enums/ImageSize';
import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('glk-image-cycler')
class ImageCycler extends LitElement {
  static get styles() {
    return css``;
  }

  @property({ type: Array })
  public images!: string[];

  @property({ type: String })
  public alt!: string;

  @property({ type: String })
  private image!: string;

  @property({ type: Number })
  private timer: number = 0;

  public firstUpdated() {
    this.image = this.images[0];
  }

  public render() {
    return html`
      <div
        class="image"
        @mouseenter=${this.startCycler}
        @mouseleave=${this.stopCycler}
      >
        <img
          src=${this.image}
          alt=${this.alt}
          width=${ImageSize.width}
          height=${ImageSize.height}
          loading="lazy"
        />
      </div>
    `;
  }

  private startCycler() {
    if (this.images.length < 2) {
      return;
    }

    clearInterval(this.timer);
    this.timer = window.setInterval(() => {
      const index = this.images.findIndex((x) => x === this.image);
      const nextIndex = index + 1 >= this.images.length ? 0 : index + 1;
      const image = this.images[nextIndex];
      this.image = image;
    }, 1000);
  }

  private stopCycler() {
    clearInterval(this.timer);
  }
}

import { css, customElement, html, LitElement, property } from 'lit-element';

import { MediaSize } from '@/enums/MediaSize';
import cx from '@/utils/classes';
import { mediaOn } from '@/utils/mediaOn';
import objToString from '@/utils/objToString';

@customElement('glk-tooltip')
class Tooltip extends LitElement {
  static get styles() {
    return css`
      .tooltip {
        position: relative;
      }
      .tooltip__content {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 100%;
        left: 50%;
        width: auto;
        height: auto;
        background-color: var(--tooltip-background);
        color: var(--tooltip-colour);
        padding: 5px;
        border: 2px solid var(--tooltip-background);
        border-radius: 4px;
        pointer-events: none;
        white-space: nowrap;
        z-index: 10;
        font-size: 1rem;
        font-weight: normal;
        transition: all ease-in-out 0.5s;
        transform: translateX(-50%);
      }

      .tooltip__content--wrap {
        white-space: pre;
      }
      .tooltip__content--fixed {
        position: fixed;
      }

      ${mediaOn(
        MediaSize.XXS,
        css`
          .tooltip__content--fixed {
            left: 5px !important;
          }
        `
      )}

      .tooltip--hovered .tooltip__content {
        visibility: visible;
        opacity: 1;
      }
    `;
  }

  @property({ type: String })
  public text: string = '';

  @property({ type: Number })
  public delay: number = 750;

  @property({ type: Boolean })
  public allowWrapping: boolean = false;

  @property({ type: Boolean })
  public usePosition: boolean = false;

  @property({ type: Number })
  private timer: number = 0;

  @property({ type: Boolean })
  private isHovered: boolean = false;

  @property({ type: Array })
  private at: number[] = [];

  public render() {
    const [left, top, adjustment] = this.at;

    const transform = adjustment
      ? { transform: `translateX(${adjustment}px)` }
      : {};

    const style = this.usePosition
      ? { top, left, bottom: 'unset', ...transform }
      : { ...transform };

    const styStr = objToString(style);

    return html`
      <div
        class=${cx('tooltip', this.isHovered && 'tooltip--hovered')}
        @mouseenter=${this.handleEnter}
        @mouseleave=${this.handleLeave}
      >
        <div
          style="${styStr}"
          class=${cx(
            'tooltip__content',
            this.allowWrapping && 'tooltip__content--wrap',
            this.usePosition && 'tooltip__content--fixed'
          )}
        >
          ${this.text}
        </div>
        <slot></slot>
      </div>
    `;
  }

  private handleEnter(e: MouseEvent) {
    const { clientX, clientY } = e;
    const root = this.shadowRoot as ShadowRoot;
    const tooltip = root.querySelector('.tooltip');
    let adjustment: number = 0;

    if (tooltip && tooltip.firstChild) {
      const rect = tooltip.getBoundingClientRect();
      const child = tooltip.firstChild as HTMLElement;
      const contentWidth = child.offsetWidth;
      const space = window.innerWidth - (rect.width + rect.left);

      if (contentWidth > rect.left + rect.width / 2) {
        adjustment = -rect.left;
      } else if (space < contentWidth) {
        adjustment = -(contentWidth - space);
      }
    }

    clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.isHovered = true;
      this.at = [clientX, clientY, adjustment];
    }, this.delay);
  }

  private handleLeave() {
    clearTimeout(this.timer);
    this.isHovered = false;
    this.at = [];
  }
}

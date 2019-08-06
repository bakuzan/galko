import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('glk-streak')
class Streak extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 5px;
      }

      .text-effect {
        overflow: hidden;
        position: relative;
        -webkit-filter: contrast(110%) brightness(190%);
        filter: contrast(110%) brightness(190%);
      }

      .neon {
        position: relative;
        background: white;
        color: transparent;
      }
      .neon::before,
      .neon::after {
        content: attr(data-text);
        color: var(--primary-colour);
        -webkit-filter: blur(0.02em);
        filter: blur(0.02em);
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
      }
      .neon::after {
        mix-blend-mode: difference;
      }
      .text-effect--off .neon::before,
      .text-effect--off .neon::after {
        color: var(--disabled-colour);
      }

      .gradient,
      .spotlight {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;
        z-index: 10;
      }

      .gradient {
        background: linear-gradient(
          45deg,
          var(--secondary-colour),
          var(--primary-colour)
        );
        mix-blend-mode: color;
      }
      .text-effect--off .gradient {
        background: var(--disabled-colour);
      }

      .spotlight {
        -webkit-animation: light 5s infinite linear;
        animation: light 5s infinite linear;
        background: radial-gradient(circle, white, transparent 25%) 0 0/25% 25%,
          radial-gradient(circle, white, black 25%) 50% 50%/12.5% 12.5%;
        top: -100%;
        left: -100%;
        mix-blend-mode: color-dodge;
      }
      .text-effect--off .spotlight {
        animation-play-state: paused;
      }

      @keyframes light {
        100% {
          -webkit-transform: translate3d(50%, 50%, 0);
          transform: translate3d(50%, 50%, 0);
        }
      }

      /* Sizing */
      .neon {
        font-weight: bolder;
        font-size: 2.25rem;
        font-family: var(--font-family);
        text-transform: uppercase;
        text-align: center;
        margin: 0;
      }
      .text-effect--off .neon {
        font-size: 1.5rem;
      }

      .pulse {
        animation: pulse 1s 1 linear;
      }

      @keyframes pulse {
        from {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }

        50% {
          -webkit-transform: scale3d(1.05, 1.05, 1.05);
          transform: scale3d(1.05, 1.05, 1.05);
        }

        to {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }
      }
    `;
  }

  @property({ type: Number })
  public streak = 0;

  @property({ type: Boolean })
  private uppedStreak = false;

  @property({ type: Number })
  private timer: number = 0;

  public updated(changes: Map<string | number | symbol, unknown>) {
    const hasStreakChange = changes.has('streak');
    const value = (changes.get('streak') as number) || 0;

    if (hasStreakChange && this.streak > value) {
      this.uppedStreak = true;
      this.setPulse();
    }
  }

  public render() {
    const hasStreak = this.streak > 0;
    const streakText = `${this.streak}x streak`;

    return html`
      <div class="text-effect ${hasStreak ? '' : 'text-effect--off'}">
        <div
          class="neon ${this.uppedStreak ? 'pulse' : ''}"
          data-text="${streakText}"
        >
          ${streakText}
        </div>
        <div class="gradient"></div>
        <div class="spotlight"></div>
      </div>
    `;
  }

  private setPulse() {
    clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.uppedStreak = false;
    }, 1250);
  }
}

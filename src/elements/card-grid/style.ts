import { html } from 'lit-element';

export default html`
  <style>
    @keyframes heartBeat {
      0% {
        transform: scale(0.1);
        opacity: 0;
      }

      30% {
        transform: scale(0.5);
        opacity: 0.5;
      }

      60% {
        transform: scale(1);
        opacity: 1;
      }

      75% {
        transform: scale(1.5);
      }

      100% {
        transform: scale(1);
      }
    }

    glk-card {
      position: relative;
    }
    glk-card::before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      font-size: 8rem;
      opacity: 0;
      animation-name: heartBeat;
      animation-duration: 1.3s;
      animation-timing-function: ease-in-out;
      animation-play-state: paused;
    }
  </style>
`;

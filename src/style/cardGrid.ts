import { css } from 'lit-element';

export default css`
  @keyframes growth {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    20% {
      transform: scale(0.2);
      opacity: 0.3;
    }

    40% {
      transform: scale(0.5);
      opacity: 0.6;
    }

    60% {
      transform: scale(0.9);
      opacity: 0.9;
    }

    80% {
      transform: scale(1.2);
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
    font-size: 7rem;
    opacity: 0;
    animation-name: growth;
    animation-delay: 0.2s;
    animation-duration: 1.1s;
    animation-timing-function: ease-in-out;
    animation-play-state: paused;
  }
`;

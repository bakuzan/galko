import { css } from 'lit-element';

export default css`

  @media (min-width: 768px) {
    :host,
    .card,
    .card__axis,
    .card__front,
    .card__back,
    .card__image {
      --card-width: 103px;
      --card-height: 160px;
    }
  }

  @media (min-width: 479px) and (max-width:767px) {
    :host,
    .card,
    .card__axis,
    .card__front,
    .card__back,
    .card__image {    
      --card-width: 83px;
      --card-height: 130px;
    }
  }

  @media (max-width: 479px) {
    :host,
    .card,
    .card__axis,
    .card__front,
    .card__back,
    .card__image {    
      --card-width: 64px;
      --card-height: 100px;
    }
  }

  /* Shared sizing */
  :host,
  .card,
  .card__axis,
  .card__front,
  .card__back,
  .card__image {
    width: var(--card-width);
    height: var(--card-height);
  }

  /* Card */
  .card {
    /* clear button styles */
    background: none;
    border: none;
    display: block;
    padding: 0;
    /* clear button styles */

    perspective: 1000px;
  }

  .card--clickable {
    cursor: pointer;
  }

  .card--clickable:focus,
  .card--clickable:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }

  /* Axis */
  .card__axis {
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
  }
  .card--touched .card__axis {
    transform: rotateY(180deg);
  }

  /* Sides */
  .card__front,
  .card__back,
  .card__image {
    border-radius: 0.3rem;
  }

  .card__front,
  .card__back {
    box-shadow: 1px 1px 2px 0px var(--card-shadow),
      0px 0px 5px 0px var(--card-shadow);

    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
  }

  .card__back {
    background-color: var(--card-colour);
    /* for firefox 31 */
    transform: rotateY(0deg);
  }

  .card__front {
    transform: rotateY(180deg);
  }

  .card--touched .card__front {
    z-index: 2;
  }
`;

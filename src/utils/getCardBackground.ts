import { html } from 'lit-html';
import { CardBackType } from '../elements/card/CardBackType';
import svgToBase64Image from './svgToBase64Image';

const colours = {
  primaryColour: `#fdd87f`,
  primaryColourHovered: `#999900`,

  secondaryColour: `#51c2ea`,
  secondaryColourHovered: `#2a87ca`
};

function getCardBackStyle(type: CardBackType) {
  switch (type) {
    case CardBackType.argyle:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="90">
          <g transform="scale(1 1.5)">
            <rect width="99" height="99" fill=${colours.primaryColour} />
            <rect
              width="42.42"
              height="42.42"
              transform="translate(30 0) rotate(45)"
              fill=${colours.primaryColourHovered}
            />
            <rect
              width="99"
              height="1"
              transform="rotate(45)"
              fill=${colours.secondaryColour}
            />
            <rect
              width="99"
              height="1"
              transform="translate(0 60) rotate(-45)"
              fill=${colours.secondaryColour}
            />
          </g>
        </svg>
      `;

    case CardBackType.shippo:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
          <rect width="80" height="80" fill=${colours.primaryColour} />
          <circle cx="40" cy="40" r="40" fill=${colours.secondaryColour} />
          <path
            d="M0 40 A40 40 45 0 0 40 0 A40 40 315 0 0 80 40 A40 40 45 0 0 40 80 A40 40 270 0 0 0 40Z"
            fill=${colours.primaryColour}
          />
        </svg>
      `;

    case CardBackType.honeyCombs:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="100">
          <rect width="56" height="100" fill=${colours.primaryColour} />
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke=${colours.secondaryColour}
            stroke-width="2"
          />
          <path
            d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
            fill="none"
            stroke=${colours.secondaryColourHovered}
            stroke-width="2"
          />
        </svg>
      `;
    case CardBackType.chevrons:
      return html`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="60"
          height="30"
        >
          <defs>
            <rect
              id="r"
              width="30"
              height="15"
              fill=${colours.primaryColour}
              stroke-width="2.5"
              stroke=${colours.secondaryColour}
            />
            <g id="p">
              <use xlink:href="#r" />
              <use y="15" xlink:href="#r" />
              <use y="30" xlink:href="#r" />
              <use y="45" xlink:href="#r" />
            </g>
          </defs>
          <use xlink:href="#p" transform="translate(0 -25) skewY(40)" />
          <use xlink:href="#p" transform="translate(30 0) skewY(-40)" />
        </svg>
      `;
    case CardBackType.blueprint:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <rect width="100" height="100" fill=${colours.primaryColour} />
          <g fill=${colours.secondaryColourHovered}>
            <rect width="100" height="1" y="20" />
            <rect width="100" height="1" y="40" />
            <rect width="100" height="1" y="60" />
            <rect width="100" height="1" y="80" />
            <rect width="1" height="100" x="20" />
            <rect width="1" height="100" x="40" />
            <rect width="1" height="100" x="60" />
            <rect width="1" height="100" x="80" />
          </g>
          <rect
            width="100"
            height="100"
            fill="none"
            stroke-width="2"
            stroke=${colours.secondaryColour}
          />
        </svg>
      `;
    case CardBackType.subtleDots:
    default:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5">
          <rect width="5" height="5" fill=${colours.primaryColour} />
          <rect width="1" height="1" fill=${colours.secondaryColour} />
        </svg>
      `;
  }
}

export default function getCardBackground(type: CardBackType) {
  const svg = getCardBackStyle(type);
  return svgToBase64Image(svg);
}

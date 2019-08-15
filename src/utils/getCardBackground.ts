import { CardBackType } from '@/enums/CardBackType';
import { html } from 'lit-html';
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
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="76">
          <g transform="scale(1 1.5)">
            <rect width="99" height="99" fill=${colours.primaryColour} />
            <rect
              width="34"
              height="34"
              transform="translate(25 0) rotate(45)"
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
              transform="translate(0 50) rotate(-45)"
              fill=${colours.secondaryColour}
            />
          </g>
        </svg>
      `;

    case CardBackType.shippo:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60">
          <rect width="60" height="60" fill=${colours.primaryColour} />
          <circle cx="30" cy="30" r="30" fill=${colours.secondaryColour} />
          <path
            d="M0 30 A30 30 35 0 0 30 0 A30 30 300 0 0 60 30 A30 30 35 0 0 30 60 A30 30 250 0 0 0 30Z"
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
          width="48"
          height="30"
        >
          <defs>
            <rect
              id="r"
              width="24"
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
          <use xlink:href="#p" transform="translate(24 0) skewY(-40)" />
        </svg>
      `;
    case CardBackType.blueprint:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
          <rect width="30" height="30" fill=${colours.primaryColour} />
          <g fill=${colours.secondaryColourHovered}>
            <rect width="100" height="1" y="15" />
            <rect width="100" height="1" y="30" />
            <rect width="100" height="1" y="45" />
            <rect width="100" height="1" y="60" />
            <rect width="1" height="100" x="15" />
            <rect width="1" height="100" x="30" />
            <rect width="1" height="100" x="45" />
            <rect width="1" height="100" x="60" />
          </g>
          <rect
            width="30"
            height="30"
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

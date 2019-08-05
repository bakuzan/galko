import { css, CSSResult } from 'lit-element';
import { MediaSize } from '../enums/MediaSize';

const screenXS = 480;
const screenSM = 768;
const screenMD = 992;
const screenLG = 1200;

// Prevent overlapping
const screenXSMax = screenXS - 1;
const screenSMMax = screenSM - 1;
const screenMDMax = screenMD - 1;

const sizeFn = {
  xs: (s: CSSResult) => css`
    @media (max-width: ${screenXSMax}px) {
      ${s}
    }
  `
};

export function mediaOn(key: MediaSize, style: CSSResult) {
  switch (key) {
    case MediaSize.XS:
      return sizeFn.xs(style);
    default:
      return css``;
  }
}

import { MediaSize } from '@/enums/MediaSize';
import { css, CSSResult } from 'lit-element';

const screenXS = 480;
const screenSM = 768;
// const screenMD = 992;
// const screenLG = 1200;

// Prevent overlapping
const screenXSMax = screenXS - 1;
const screenSMMax = screenSM - 1;
// const screenMDMax = screenMD - 1;

const sizeFn = {
  sm: (s: CSSResult) => css`
    @media (min-width: ${screenXS}px) and (max-width: ${screenSMMax}px) {
      ${s}
    }
  `,
  xs: (s: CSSResult) => css`
    @media (max-width: ${screenXSMax}px) {
      ${s}
    }
  `
};

export function mediaOn(key: MediaSize, style: CSSResult) {
  switch (key) {
    case MediaSize.SM:
      return sizeFn.sm(style);
    case MediaSize.XS:
      return sizeFn.xs(style);
    default:
      return css``;
  }
}

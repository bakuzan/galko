import { css, CSSResult } from 'lit-element';

const screenXS = 480;
const screenSM = 768;
const screenMD = 992;
const screenLG = 1200;

// Prevent overlapping
const screenXSMax = screenXS - 1;
const screenSMMax = screenSM - 1;
const screenMDMax = screenMD - 1;

export enum Size {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}

const sizeFn = {
  xs: (s: CSSResult) => css`
    @media (max-width: ${screenXSMax}px) {
      ${s}
    }
  `
};

export function mediaOn(key: Size, style: CSSResult) {
  switch (key) {
    case Size.XS:
      return sizeFn.xs(style);
    default:
      return css``;
  }
}

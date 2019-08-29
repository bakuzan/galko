import { MediaSize } from '@/enums/MediaSize';
import { css, CSSResult } from 'lit-element';

const screenXS = 480;
const screenSM = 768;
const screenMD = 992;
const screenLG = 1200;

// Prevent overlapping
const screenXXSMax = screenXS - 1;
const screenXSMax = screenSM - 1;
const screenSMMax = screenMD - 1;
const screenMDMax = screenLG - 1;

const sizeFn = {
  lg: (s: CSSResult) => css`
    @media (min-width: ${screenLG}px) {
      ${s}
    }
  `,
  md: (s: CSSResult) => css`
    @media (min-width: ${screenMD}px) and (max-width: ${screenMDMax}px) {
      ${s}
    }
  `,
  sm: (s: CSSResult) => css`
    @media (min-width: ${screenSM}px) and (max-width: ${screenSMMax}px) {
      ${s}
    }
  `,
  xs: (s: CSSResult) => css`
    @media (min-width: ${screenXS}px) and (max-width: ${screenXSMax}px) {
      ${s}
    }
  `,
  xxs: (s: CSSResult) => css`
    @media (max-width: ${screenXXSMax}px) {
      ${s}
    }
  `
};

export function mediaOn(key: MediaSize, style: CSSResult) {
  switch (key) {
    case MediaSize.LG:
      return sizeFn.lg(style);
    case MediaSize.MD:
      return sizeFn.md(style);
    case MediaSize.SM:
      return sizeFn.sm(style);
    case MediaSize.XS:
      return sizeFn.xs(style);
    case MediaSize.XXS:
      return sizeFn.xxs(style);
  }
}

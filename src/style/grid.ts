import { MediaSize } from '@/enums/MediaSize';
import { mediaOn } from '@/utils/mediaOn';
import { css } from 'lit-element';

const responsive = [
  { size: MediaSize.LG, num: 20 },
  { size: MediaSize.MD, num: 25 },
  { size: MediaSize.SM, num: 33 },
  { size: MediaSize.XS, num: 50 }
].map(({ size, num }) =>
  mediaOn(
    size,
    css`
      .grid--standard {
        grid-template-columns: repeat(auto-fit, ${num}%);
        grid-auto-rows: 1fr;
      }
    `
  )
);

export default [
  css`
    .grid {
      display: grid;
      padding: 0 5px;
      margin: 20px 0;
      list-style-type: none;
    }
  `,
  ...responsive
];

import { MediaSize } from '@/enums/MediaSize';
import { mediaOn } from '@/utils/mediaOn';
import { css } from 'lit-element';

const responsive = [
  { size: MediaSize.LG, num: 1 },
  { size: MediaSize.MD, num: 1 },
  { size: MediaSize.SM, num: 1.5 },
  { size: MediaSize.XS, num: 2 },
  { size: MediaSize.XXS, num: 2 }
].map(({ size, num }) =>
  mediaOn(
    size,
    css`
      .grid--standard {
        grid-template-columns: repeat(
          auto-fill,
          calc(var(--card-width) * ${num})
        );
        grid-auto-rows: 1fr;
        gap: calc(25px / ${num});
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

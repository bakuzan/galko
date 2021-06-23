import { MediaSize } from '@/enums/MediaSize';
import { mediaOn } from '@/utils/mediaOn';
import { css } from 'lit-element';

const responsive = [
  { size: MediaSize.LG,  },
  { size: MediaSize.MD, },
  { size: MediaSize.SM,  },
  { size: MediaSize.XS,  }
].map(({ size }) =>
  mediaOn(
    size,
    css`
      .grid--standard {
        grid-template-columns: repeat(auto-fill, calc(var(--card-width) + 30px));
        grid-auto-rows: 1fr;
        gap: 10px;
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

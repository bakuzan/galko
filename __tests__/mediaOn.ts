import { MediaSize } from '@/enums/MediaSize';
import { mediaOn } from '@/utils/mediaOn';

jest.mock('lit-element', () => ({
  css: jest.fn((ss: string[], ...vs: string[]) =>
    ss.reduce((p: string, c: string, i: number) => `${p}${c}${vs[i]}`, '')
  )
}));

import { css } from 'lit-element';

describe('mediaOn', () => {
  it('should wrap style in media query (XXS)', () => {
    const result = mediaOn(MediaSize.XXS, 'test' as any) as any;

    expect(result.includes('@media')).toBe(true);
    expect(result.includes('test')).toBe(true);
    expect(css).toHaveBeenCalled();
  });

  it('should wrap style in media query (XS)', () => {
    const result = mediaOn(MediaSize.XS, 'test' as any) as any;

    expect(result.includes('@media')).toBe(true);
    expect(result.includes('test')).toBe(true);
    expect(css).toHaveBeenCalled();
  });

  it('should wrap style in media query (SM)', () => {
    const result = mediaOn(MediaSize.SM, 'test' as any) as any;

    expect(result.includes('@media')).toBe(true);
    expect(result.includes('test')).toBe(true);
    expect(css).toHaveBeenCalled();
  });

  it('should wrap style in media query (MD)', () => {
    const result = mediaOn(MediaSize.MD, 'test' as any) as any;

    expect(result.includes('@media')).toBe(true);
    expect(result.includes('test')).toBe(true);
    expect(css).toHaveBeenCalled();
  });

  it('should wrap style in media query (LG)', () => {
    const result = mediaOn(MediaSize.LG, 'test' as any) as any;

    expect(result.includes('@media')).toBe(true);
    expect(result.includes('test')).toBe(true);
    expect(css).toHaveBeenCalled();
  });
});

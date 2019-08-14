import padNumber from '@/utils/pad';

describe('pad', () => {
  it('should return padded input', () => {
    const expected = '01';

    const result = padNumber(1, 2);

    expect(result).toEqual(expected);
  });

  it('should return padded custom inputs', () => {
    const expected = 'X1';

    const result = padNumber(1, 2, 'X');

    expect(result).toEqual(expected);
  });

  it('should return preserved input', () => {
    const expected = '100';

    const result = padNumber(100, 2);

    expect(result).toEqual(expected);
  });
});

import * as fns from '@/utils/capitalise';

describe('capitalise', () => {
  it('should capitalise a string', () => {
    const expected = 'Ayaka';

    const result = fns.capitalise('ayaka');

    expect(result).toEqual(expected);
  });

  it('should ignore other capitals', () => {
    const expected = 'AyaKa';

    const result = fns.capitalise('ayaKa');

    expect(result).toEqual(expected);
  });
});

describe('separateAndCapitalise', () => {
  it('should split camelCase and capitalise the first word', () => {
    const expected = 'Kagari ayaka';

    const result = fns.separateAndCapitalise('kagariAyaka');

    expect(result).toEqual(expected);
  });

  it('should capitalise the string with no other capitals', () => {
    const expected = 'Kagariayaka';

    const result = fns.separateAndCapitalise('kagariayaka');

    expect(result).toEqual(expected);
  });
});

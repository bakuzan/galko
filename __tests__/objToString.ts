import objToString from '@/utils/objToString';

describe('objToString', () => {
  it('should return string of object keys for element style', () => {
    const expected = 'name: bruno;';

    const result = objToString({ name: 'bruno' });

    expect(result).toEqual(expected);
  });

  it('should return empty string', () => {
    const expected = '';

    const result = objToString({});

    expect(result).toEqual(expected);
  });
});

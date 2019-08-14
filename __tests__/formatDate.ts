import formatDateForDisplay from '@/utils/formatDate';

describe('formatDateForDisplay', () => {
  it('should return empty string for falsey inputs', () => {
    const expected = '';

    const results = [formatDateForDisplay(''), formatDateForDisplay(undefined)];

    results.forEach((result) => expect(result).toEqual(expected));
  });

  it('should format date to DD MMM YYYY', () => {
    const expected = '06 Mar 2019 @ 00:00';

    const date = new Date('2019-03-06').getTime();
    const result = formatDateForDisplay(date);

    expect(result).toEqual(expected);
  });

  it('should re-format string to DD MMM YYYY', () => {
    const expected = '06 Mar 2019 @ 00:00';

    const date = '2019-03-06';
    const result = formatDateForDisplay(date);

    expect(result).toEqual(expected);
  });
});

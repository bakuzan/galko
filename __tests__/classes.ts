import cx from '@/utils/classes';

describe('classes', () => {
  it('should return input', () => {
    const expected = 'hello';

    const result = cx('hello');

    expect(result).toEqual(expected);
  });

  it('should return inputs joined by spaces', () => {
    const expected = 'hello world';

    const result = cx('hello', 'world');

    expect(result).toEqual(expected);
  });

  it('should return inputs joined by spaces falsey removed', () => {
    const expected = 'hello world';

    const result = cx('hello', false && 'ignored', 'world');

    expect(result).toEqual(expected);
  });

  it('should return inputs joined by spaces with additional class', () => {
    const expected = 'hello interrupted world';

    const result = cx('hello', true && 'interrupted', 'world');

    expect(result).toEqual(expected);
  });
});

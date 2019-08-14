import 'jest-localstorage-mock';

import { Storage } from '@/utils/storage';

describe('Storage', () => {
  const STORE_KEY = 'AYAKA_TEST';
  const STORE_DEFAULTS = {
    name: 'ayaka',
    age: 17,
    height: 183
  };
  const store = new Storage(STORE_KEY, STORE_DEFAULTS);

  beforeEach(() => {
    localStorage.clear();
  });

  // New
  it('should create store instance', () => {
    const s = new Storage(STORE_KEY, {
      name: 'ayaka',
      age: 17,
      height: 183
    });

    expect(s instanceof Storage).toBeTruthy();
  });

  // Get
  it('should return defaults on get call without prior values (object)', () => {
    const result = store.get();

    expect(result).toEqual(STORE_DEFAULTS);
    expect(localStorage.getItem).toHaveBeenCalledWith(STORE_KEY);
  });

  it('should return defaults on get call without prior values (array)', () => {
    const s = new Storage(STORE_KEY, []);
    const result = s.get();

    expect(result).toEqual([]);
    expect(localStorage.getItem).toHaveBeenCalledWith(STORE_KEY);
  });

  // Set
  it('should return updated values (object) on set', () => {
    const values = { age: 18 };

    const expected = { ...STORE_DEFAULTS, ...values };
    const expectedStr = JSON.stringify({ ...STORE_DEFAULTS, ...values });

    const result = store.set(values);

    expect(result).toEqual(expected);
    expect(localStorage.setItem).toHaveBeenCalledWith(STORE_KEY, expectedStr);
    expect(localStorage.__STORE__[STORE_KEY]).toBe(expectedStr);
  });

  it('should return updated values (array) on set', () => {
    const s = new Storage(STORE_KEY, []);
    const values = [18];

    const expected = [18];
    const expectedStr = JSON.stringify(expected);

    let result = s.set(values);

    expect(result).toEqual(expected);
    expect(localStorage.setItem).toHaveBeenCalledWith(STORE_KEY, expectedStr);
    expect(localStorage.__STORE__[STORE_KEY]).toBe(expectedStr);

    result = s.set({ testCoverage: 1 });
    expect(result).toEqual([18, { testCoverage: 1 }]);
  });

  // Replace
  it('should return replaced values on replace', () => {
    const input = { name: 'ayaka', age: 18, height: 185 };
    const expected = JSON.stringify(input);

    const result = store.replace(input);

    expect(result).toEqual(input);
    expect(localStorage.setItem).toHaveBeenCalledWith(STORE_KEY, expected);
    expect(localStorage.__STORE__[STORE_KEY]).toBe(expected);
  });

  // Upgrade
  it('should return upgrade data in localStorage', () => {
    const input = { ...STORE_DEFAULTS, test: 'UPGRADE' };
    const expected = JSON.stringify(input);

    store.upgrade(() => input);

    const result = store.get();

    expect(result).toEqual(input);
    expect(localStorage.setItem).toHaveBeenCalledWith(STORE_KEY, expected);
    expect(localStorage.__STORE__[STORE_KEY]).toBe(expected);
  });

  it('should return upgrade data when passed multiple functions in localStorage', () => {
    const input = { ...STORE_DEFAULTS, test: 'UPGRADE' };
    const expected = JSON.stringify({ ...input, value: 2 });

    store.upgrade(
      () => ({ ...input, value: 1 }),
      (d: any) => ({ ...d, value: d.value + 1 })
    );

    const result = store.get();

    expect(result).toEqual({ ...input, value: 2 });
    expect(localStorage.setItem).toHaveBeenCalledWith(STORE_KEY, expected);
    expect(localStorage.__STORE__[STORE_KEY]).toBe(expected);
  });
});

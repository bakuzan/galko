import 'jest-localstorage-mock';

import getCharacters from '@/utils/characters';

jest.mock('@/utils/shuffleArray', () => jest.fn((l) => l));
jest.mock('@/utils/generateUniqueId', jest.fn);

import shuffleArray from '@/utils/shuffleArray';
import generateUniqueId from '@/utils/generateUniqueId';

describe('characters', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call local storage to get options', () => {
    const storeSpy = jest.spyOn(localStorage, 'getItem');

    getCharacters();

    expect(storeSpy).toHaveBeenCalled();
  });

  it('should shuffle the character pre and post pairing', () => {
    getCharacters();

    expect(shuffleArray).toHaveBeenCalledTimes(2);
  });

  it('should generate a unique id for each card', () => {
    // default 15 pairs -> 30 cards

    getCharacters();

    expect(generateUniqueId).toHaveBeenCalledTimes(30);
  });
});

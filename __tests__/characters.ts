import 'jest-localstorage-mock';

import getCharacters from '@/utils/characters';

jest.mock('ayaka/shuffleArray', () => jest.fn((l) => l));
jest.mock('ayaka/generateUniqueId', jest.fn);

import shuffleArray from 'ayaka/shuffleArray';
import generateUniqueId from 'ayaka/generateUniqueId';

describe('characters', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call local storage to get options', () => {
    const storeSpy = jest.spyOn(localStorage, 'getItem');

    getCharacters();

    expect(storeSpy).toHaveBeenCalled();
  });

  it('should shuffle each character images and the character pre/post pairing', () => {
    const forEachCharacterImages = 15;
    const characterPrePostPairing = 2;
    const expected = forEachCharacterImages + characterPrePostPairing;

    getCharacters();

    expect(shuffleArray).toHaveBeenCalledTimes(expected);
  });

  it('should generate a unique id for each card', () => {
    // default 15 pairs -> 30 cards

    getCharacters();

    expect(generateUniqueId).toHaveBeenCalledTimes(30);
  });
});

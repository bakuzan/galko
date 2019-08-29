import { Card } from '@/interfaces/Card';
import { Character } from '@/interfaces/Character';

import generateUniqueId from 'ayaka/generateUniqueId';
import shuffleArray from 'ayaka/shuffleArray';
import { dataStore, optsStore } from './storage';

import characters from '@/data/characters.json';
import { Deck } from '@/interfaces/Deck';

function resolveImage(x: Character) {
  const images = [x.image, ...x.images.map((i) => i.url)];
  return shuffleArray<string>(images).pop() as string;
}

const addId = (x: Character): Card => ({
  characterId: x.id,
  id: generateUniqueId(),
  image: x.image,
  name: x.name
});

export default function getData(): Card[] {
  const decks = dataStore.getKey('decks') as Deck[];
  const opts = optsStore.get();

  let sourceCharacters = characters;
  const deck = decks.find((x) => x.id === opts.deckId);
  if (deck) {
    sourceCharacters = characters.filter((c) =>
      deck.characterIds.includes(c.id)
    );
  }

  const randomCharacters = shuffleArray<Character>(sourceCharacters)
    .slice(0, opts.startingPairs)
    .map((x) => ({ ...x, image: resolveImage(x) }));

  const paired = [...randomCharacters, ...randomCharacters];
  return shuffleArray<Character>(paired).map(addId);
}

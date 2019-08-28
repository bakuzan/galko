import { Card } from '@/interfaces/Card';
import { Character } from '@/interfaces/Character';

import generateUniqueId from './generateUniqueId';
import shuffleArray from './shuffleArray';
import { optsStore } from './storage';

import characters from '@/data/characters.json';

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
  const opts = optsStore.get();
  const randomCharacters = shuffleArray<Character>(characters)
    .slice(0, opts.startingPairs)
    .map((x) => ({ ...x, image: resolveImage(x) }));

  const paired = [...randomCharacters, ...randomCharacters];
  return shuffleArray<Character>(paired).map(addId);
}

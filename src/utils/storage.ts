import { CardBackType } from '@/enums/CardBackType';
import { GlkData } from '@/interfaces/GlkData';
import { GlkOptions } from '@/interfaces/GlkOptions';
import Store from 'ayaka/localStorage';

export const optsStore = new Store<GlkOptions>('glkOptions', {
  cardBack: CardBackType.subtleDots,
  deckId: '',
  hideOnMatch: true,
  startingPairs: 15
});

export const dataStore = new Store<GlkData>('glkData', {
  decks: [],
  history: []
});

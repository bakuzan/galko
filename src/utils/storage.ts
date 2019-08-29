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

// TODO: Remove later
dataStore.upgrade((data) => {
  const hasHistory = data.history && data.history.length;
  const hasDecks = data.decks && data.decks.length;
  if (hasHistory || hasDecks) {
    return data;
  }

  const history = JSON.parse(localStorage.getItem('glkScores') || '[]');
  const decks = JSON.parse(localStorage.getItem('glkDecks') || '{}');

  localStorage.removeItem('glkScores');
  localStorage.removeItem('glkDecks');

  return {
    decks: Object.keys(decks).map((k) => ({ id: k, ...decks[k] })),
    history
  };
});

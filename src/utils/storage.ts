import { CardBackType } from '@/enums/CardBackType';
import { GameResult } from '@/interfaces/GameResult';
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

// TODO : To be removed when update is propagated
dataStore.upgrade((data: Partial<GlkData>) => {
  if (!data) {
    return data;
  }

  const history = (data.history || []).map((x: Partial<GameResult>) => ({
    ...x,
    turns: x.turns ? x.turns : 0
  }));

  return { ...data, history } as Partial<GlkData>;
});

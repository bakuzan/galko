import { Deck } from '@/interfaces/Deck';
import { GameResult } from '@/interfaces/GameResult';

export interface GlkData {
  decks: Deck[];
  history: GameResult[];
}

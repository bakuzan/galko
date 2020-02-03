import { GameResultView } from '@/interfaces/GameResult';
export declare type ResultField = 'timeElapsed' | 'datetime' | 'pairs' | 'longestStreak' | 'matchAttemptsRatio';
export default function orderGameHistory(history: GameResultView[], key: ResultField, order: number): any[];

import { GameResultView } from '@/interfaces/GameResult';
export declare const resultFields: readonly ["timeElapsed", "datetime", "pairs", "longestStreak", "matchAttemptsRatio"];
export declare type ResultField = typeof resultFields[number];
export default function orderGameHistory(history: GameResultView[], key: ResultField, order: number): any[];

export interface GameResult {
  datetime: number;
  timeElapsed: number;
  longestStreak: number;
  pairs: number;
  turns: number;
}

export interface GameResultView extends GameResult {
  date: string;
  matchAttemptsRatio: number;
  timeElapsedDisplay: string;
}

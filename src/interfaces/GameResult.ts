export interface GameResult {
  datetime: number;
  timeElapsed: number;
  longestStreak: number;
  pairs: number;
}

export interface GameResultView extends GameResult {
  date: string;
  timeElapsedDisplay: string;
}

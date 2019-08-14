declare class GameTimer {
    readonly time: string;
    readonly isPaused: boolean;
    private interval;
    private paused;
    private gameTime;
    formatTime(time: number): string;
    subscribe(fn: (time: string) => void): () => number;
    start(): void;
    stop(): void;
    reset(): void;
    private callback;
}
declare const _default: GameTimer;
export default _default;

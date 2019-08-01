declare class GameTimer {
    readonly time: string;
    readonly isPaused: boolean;
    private interval;
    private paused;
    private gameTime;
    subscribe(fn: (time: string) => void): () => string;
    start(): void;
    stop(): void;
    reset(): void;
    private callback;
}
declare const _default: GameTimer;
export default _default;

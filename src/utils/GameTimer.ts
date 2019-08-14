import pad from './pad';

class GameTimer {
  get time() {
    return this.formatTime(this.gameTime);
  }

  get isPaused() {
    return this.paused;
  }

  private interval = 0;
  private paused = true;
  private gameTime = 0;

  public formatTime(time: number): string {
    const mins = Math.floor(time / 60);
    const secs = time % 60;

    return `${pad(mins, 2)}m ${pad(secs, 2)}s`;
  }

  public subscribe(fn: (time: string) => void) {
    this.callback = fn;
    this.reset();
    this.start();

    return (): number => {
      const time = this.gameTime;
      this.callback = () => null;
      this.reset();

      return time;
    };
  }

  public start() {
    this.paused = false;
    clearInterval(this.interval);
    this.interval = window.setInterval(() => {
      this.gameTime += 1;
      this.callback(this.time);
    }, 1000);
  }

  public stop() {
    this.paused = true;
    clearInterval(this.interval);
  }

  public reset() {
    this.stop();
    this.gameTime = 0;
  }

  private callback: (time: string) => void = () => null;
}

export default new GameTimer();

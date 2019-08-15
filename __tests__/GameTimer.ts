import GameTimer from '@/utils/GameTimer';

describe('GameTimer', () => {
  jest.useFakeTimers();

  afterEach(() => {
    GameTimer.reset();
  });

  it('should format number to XXm XXs', () => {
    const result = GameTimer.formatTime(69);
    expect(result).toEqual('01m 09s');
  });

  it('should reset timer', () => {
    GameTimer.start();

    jest.advanceTimersByTime(2000);

    let result = GameTimer.time;
    expect(result).not.toEqual('00m 00s');

    GameTimer.reset();
    result = GameTimer.time;
    expect(result).toEqual('00m 00s');
  });

  it('should set pause to true', () => {
    GameTimer.start();
    let result = GameTimer.isPaused;
    expect(result).toEqual(false);

    GameTimer.stop();
    result = GameTimer.isPaused;
    expect(result).toEqual(true);
    expect(clearInterval).toHaveBeenCalled();
  });

  it('should call callback on each interval', () => {
    let mockFn: any;

    mockFn = jest.fn((time) => {
      expect(time).toEqual('00m 01s');
      expect(setInterval).toHaveBeenCalled();
      expect(mockFn).toHaveBeenCalled();
    });

    GameTimer.subscribe(mockFn);
    GameTimer.start();
  });

  it('should unsub successfully', () => {
    const resetSpy = jest.spyOn(GameTimer, 'reset');
    const mockFn = jest.fn();

    const unsub = GameTimer.subscribe(mockFn);
    GameTimer.start();

    jest.advanceTimersByTime(2000);

    expect(mockFn).toHaveBeenCalledTimes(2);
    mockFn.mockReset();

    const result = unsub();

    jest.advanceTimersByTime(2000);

    expect(result).toEqual(2);
    expect(GameTimer.isPaused).toEqual(true);
    expect(GameTimer.time).toEqual('00m 00s');
    expect(clearInterval).toHaveBeenCalled();

    expect(mockFn).not.toHaveBeenCalled();
    expect(resetSpy).toHaveBeenCalled();
  });
});
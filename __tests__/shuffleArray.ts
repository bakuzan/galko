import shuffleArray from '@/utils/shuffleArray';

describe('shuffleArray', () => {
  it('should call math.floor', () => {
    const floorSpy = jest.spyOn(Math, 'floor');

    const input = [1, 2, 3, 4];
    const times = input.length - 1;

    shuffleArray(input);

    expect(floorSpy).toHaveBeenCalledTimes(times);
  });

  it('should call math.random', () => {
    const floorSpy = jest.spyOn(Math, 'random');

    const input = [1, 2, 3, 4];
    const times = input.length - 1;

    shuffleArray(input);

    expect(floorSpy).toHaveBeenCalledTimes(times);
  });
});

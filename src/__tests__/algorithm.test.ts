import { calculateDistance } from '../algorithm';
describe('calculate the distance correctly for different input matrices', () => {
  it('calculates the distance correctly for a generic input', () => {
    const inputMatrix = [
      [0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 1, 1, 0],
    ];
    const answer = [
      [3, 2, 1, 0],
      [2, 1, 0, 0],
      [1, 0, 0, 1],
    ];
    const returnedAnswer = calculateDistance(3, 4, inputMatrix);
    expect(returnedAnswer).toEqual(answer);
  });

  it('calculates the distance correctly when only one cell is white', () => {
    const inputMatrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
    ];
    const answer = [
      [6, 5, 4, 3],
      [5, 4, 3, 2],
      [4, 3, 2, 1],
      [3, 2, 1, 0],
    ];

    const returnedAnswer = calculateDistance(4, 4, inputMatrix);
    expect(returnedAnswer).toEqual(answer);
  });

  it('calculates the distance correctly when every cell is white', () => {
    const inputMatrix = [
      [1, 1, 1],
      [1, 1, 1],
    ];
    const answer = [
      [0, 0, 0],
      [0, 0, 0],
    ];

    const returnedAnswer = calculateDistance(2, 3, inputMatrix);
    expect(returnedAnswer).toEqual(answer);
  });

  it('calculates the distance correctly when there is only one white cell', () => {
    const inputMatrix = [[1]];
    const answer = [[0]];

    const returnedAnswer = calculateDistance(1, 1, inputMatrix);
    expect(returnedAnswer).toEqual(answer);
  });

  it('calculates the distance correctly when there is only one row', () => {
    const inputMatrix = [[1, 0, 0]];
    const answer = [[0, 1, 2]];

    const returnedAnswer = calculateDistance(1, 3, inputMatrix);
    expect(returnedAnswer).toEqual(answer);
  });

  it('calculates the distance correctly when there is only one column', () => {
    const inputMatrix = [[0], [0], [1]];
    const answer = [[2], [1], [0]];

    const returnedAnswer = calculateDistance(3, 1, inputMatrix);
    expect(returnedAnswer).toEqual(answer);
  });
});

import {calculateDistances} from "../index";

describe("calculate the distance correctly", () => {

  test("calculates the distance for a generic input", () => {
    const answer = [[3, 2, 1, 0],[2, 1, 0, 0], [1, 0, 0, 1]];

    const returnedAnswer = calculateDistances(3,4, [[0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 1, 1, 0]]);
    expect(returnedAnswer).toEqual(answer);
  });

});

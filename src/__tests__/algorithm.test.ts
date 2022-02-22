import {calculateDistance} from "../algorithm";
describe("calculate the distance correctly", () => {

    it("calculates the distance for a generic input", () => {
    const answer = [
      [3, 2, 1, 0],
      [2, 1, 0, 0],
      [1, 0, 0, 1]];
        const returnedAnswer = calculateDistance(3, 4, [
      [0, 0, 0, 1],
            [0, 0, 1, 1],
            [0, 1, 1, 0]]);
        expect(returnedAnswer).toEqual(answer);
    });

    it("calculates the distance when only one white cell", () => {
        const answer = [
            [6, 5, 4, 3],
            [5, 4, 3, 2],
            [4, 3, 2, 1],
            [3, 2, 1, 0]];

        const returnedAnswer = calculateDistance(4, 4, [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 1]]);
        expect(returnedAnswer).toEqual(answer);
    });

    it("calculates the distance correctly when every cell is white", () => {
        const answer = [
            [0, 0, 0],
            [0, 0, 0]];

        const returnedAnswer = calculateDistance(2, 3, [
            [1, 1, 1],
            [1, 1, 1]]);
        expect(returnedAnswer).toEqual(answer);
    });

    it("calculates the distance correctly when there is only one white cell", () => {
        const answer = [
            [0]];

        const returnedAnswer = calculateDistance(1, 1, [
            [1]
        ]);
        expect(returnedAnswer).toEqual(answer);
    });

});

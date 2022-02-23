/**
 * @param N number rows of the matrix
 * @param M number number of columns
 * @param matrix number[][] input matrix
 * @return number[][]
 * This function calculates the distance to the closest white cell for each cell in the
 * input matrix. This uses Breath First Approach (BFS) to keep the running time complexity
 * to a minimum
 * Time Complexity: O(N*M).
 * Space Complexity: O(M*N).
 **/
export const calculateDistance = (
  N: number,
  M: number,
  matrix: number[][],
): number[][] => {
  const maxRowLen: number = N;
  const maxColLen: number = M;

  const distances: number[][] = [];
  const directions: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue: number[][] = [];

  // init two-dimensional array, where all ones marked with 0,
  // and all 0's marked as Infinity;
  // add all ones to the queue -> the main trick
  for (let row = 0; row < maxRowLen; row++) {
    distances[row] = [];

    for (let col = 0; col < maxColLen; col++) {
      if (matrix[row][col] === 1) {
        queue.push([row, col]);
        distances[row][col] = 0;
      } else {
        distances[row][col] = Infinity;
      }
    }
  }

  // now queue contains position of all ones
  while (queue.length > 0) {
    // @ts-ignore
    const node: number[] = queue.shift();
    const row: number = node[0];
    const col: number = node[1];
    const value: number = distances[row][col];

    // loop through 4 possible directions
    for (let i = 0; i < directions.length; i++) {
      const direction: number[] = directions[i];
      const tempRow: number = row + direction[0];
      const tempCol: number = col + direction[1];

      // check array bounds, and also skip ones
      if (
        tempRow < 0 ||
        tempRow >= maxRowLen ||
        tempCol < 0 ||
        tempCol >= maxColLen ||
        matrix[tempRow][tempCol] === 1
      )
        continue;

      // apply the minimal distance + 1
      const isVisited: boolean = distances[tempRow][tempCol] !== Infinity;
      distances[tempRow][tempCol] = Math.min(
        distances[tempRow][tempCol],
        1 + value,
      );

      // add non visited positions to the queue
      if (!isVisited) {
        queue.push([tempRow, tempCol]);
      }
    }
  }

  return distances;
};

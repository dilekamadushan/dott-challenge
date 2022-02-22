// import the required library
// @ts-ignore
const readline = require("readline");
const rl = readline.createInterface({
    // @ts-ignore
    input: process.stdin,
    // @ts-ignore
    output: process.stdout,
});

let readInputLines: string[] = [];
const answers: number[][][] = [];
let totalTestCases: number | undefined;
let numberOfCalculations: number = 0;
let N: number | undefined;
let M: number | undefined;
let countUserInput: number = 0;
rl.on("line", (line) => {
    readInputLines.push(line);
    console.log("Length of readInputLines", readInputLines.length);
    countUserInput += 1;
    if (countUserInput === 1) {
        totalTestCases = parseInt(line);
        readInputLines = [];
        console.log("Number of total lines", totalTestCases);
    } else if (readInputLines.length === 1) {
        const input: string = readInputLines[0];
        const formattedInput: number[] = input.split(" ").map((char) => parseInt(char));
        N = formattedInput[0];
        M = formattedInput[1];
        console.log("N, M", N, M);
    } else if (readInputLines.length === N + 1) {
        console.log("Finished taking input for this iteration", readInputLines);
        const formattedInputLines: number[][] = readInputLines
            .slice(1)
            .map((line) => line.split("").map((char) => parseInt(char)));
        const ans = calculateDistances(N, M, formattedInputLines);
        console.log("Answer returned", ans);
        answers.push(ans);
        numberOfCalculations += 1;
        readInputLines = [];
    }

    if (numberOfCalculations === totalTestCases) {
        console.log("Total Test cases processed");
        printMatrix(answers);
    }
});

export const calculateDistances = (N: number, M: number, matrix): number[][] => {
    console.log(matrix);
    const rowLen = N;
    const colLen = M;

    const distances: number[][] = [];
    const directions: number[][] = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    const queue = [];

    // init two-dimensional array, where all ones marked with 0,
    // and all 0's marked as Infinity;
    // add all ones to the queue -> the main trick
    for (let row = 0; row < rowLen; row++) {
        distances[row] = [];

        for (let col = 0; col < colLen; col++) {
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
        const node = queue.shift();
        const row = node[0];
        const col = node[1];
        const value = distances[row][col];

        // loop through 4 possible directions
        for (let i = 0; i < directions.length; i++) {
            const direction = directions[i];
            const tempRow = row + direction[0];
            const tempCol = col + direction[1];

            // check array bounds, and also skip ones
            if (
                tempRow < 0 ||
                tempRow >= rowLen ||
                tempCol < 0 ||
                tempCol >= colLen ||
                matrix[tempRow][tempCol] === 1
            )
                continue;

            // apply the minimal distance + 1
            const isVisited = distances[tempRow][tempCol] !== Infinity;
            distances[tempRow][tempCol] = Math.min(
                distances[tempRow][tempCol],
                1 + value
            );

            // add non visited positions to the queue
            if (!isVisited) {
                queue.push([tempRow, tempCol]);
            }
        }
    }

    return distances;
};

const printMatrix = (ans) => {
    // Printing the answer.
    console.log("printing the answers", ans);
    for (let k = 0; k < ans.length; k++) {
        for (let i = 0; i < ans[k].length; i++) {
            let line = "";
            for (let j = 0; j < ans[k][i].length; j++) {
                line += ans[k][i][j] + " ";
            }
            console.log(line);
        }
        console.log("\n");
    }
};

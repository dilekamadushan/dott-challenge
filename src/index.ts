// import the required library
const readline = require("readline");
import {calculateDistance} from "./algorithm";

const readLineService = readline.createInterface({
    input: process.stdin,
});

let readInputLines: string[] = [];
const answers: number[][][] = [];
let totalTestCases: number = 0;
let numberOfCalculations: number = 0;
let N: number = 0;
let M: number = 0;
let countUserInput: number = 0;

readLineService.on("line", (line: string): void => {
    readInputLines.push(line);
    countUserInput += 1;
    if (countUserInput === 1) {
        totalTestCases = parseInt(line);
        readInputLines = [];
    } else if (readInputLines.length === 1) {
        const input: string = readInputLines[0];
        const formattedInput: number[] = input.split(" ").map((char) => parseInt(char));
        N = formattedInput[0];
        M = formattedInput[1];
    } else if (readInputLines.length === N + 1) {
        const formattedInputLines: number[][] = readInputLines
            .slice(1)
            .map((line) => line.split("").map((char) => parseInt(char)));
        const ans = calculateDistance(N, M, formattedInputLines);
        answers.push(ans);
        numberOfCalculations += 1;
        readInputLines = [];
    }
    if (numberOfCalculations === totalTestCases) {
        printMatrix(answers);
        process.exit(0);
    }
});

const printMatrix = (ans: number[][][]): void => {
    // Printing the answer.
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

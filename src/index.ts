import readline from 'readline';
import { calculateDistance } from './algorithm';

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

/**
 * @param string input from the user
 * This function gets user input from the standard input
 * and passes the input into algorthm to calculate the distance
 * and finally calls the printMatrix function
 **/
readLineService.on('line', (line: string): void => {
  readInputLines.push(line);
  countUserInput += 1;
  if (countUserInput === 1) {
    totalTestCases = parseInt(line);
    readInputLines = [];
  } else if (readInputLines.length === 1) {
    const input: string = readInputLines[0];
    const formattedInput: number[] = input
      .split(' ')
      .map(char => parseInt(char));
    N = formattedInput[0];
    M = formattedInput[1];
  } else if (readInputLines.length === N + 1) {
    const formattedInputLines: number[][] = readInputLines
      .slice(1)
      .map(line => line.split('').map(char => parseInt(char)));
    // call the algorithm for each test input
    const ans = calculateDistance(N, M, formattedInputLines);
    answers.push(ans);
    numberOfCalculations += 1;
    readInputLines = [];
  }
  if (numberOfCalculations === totalTestCases) {
    printMatrix(answers);
    // we exit the program here when all the test cases are processed
    process.exit(0);
  }
});
/**
 * @param ans number[][][] input matrix
 * This function prints all the answers in the standard output
 **/
const printMatrix = (ans: number[][][]): void => {
  // Printing the answer.
  for (let k = 0; k < ans.length; k++) {
    for (let i = 0; i < ans[k].length; i++) {
      let line = '';
      for (let j = 0; j < ans[k][i].length; j++) {
        line += ans[k][i][j] + ' ';
      }
      console.log(line);
    }
    console.log('\n');
  }
};

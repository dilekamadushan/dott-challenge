// import the required library
// @ts-ignore
const readline = require("readline");
const rl = readline.createInterface({
  // @ts-ignore
  input: process.stdin,
  // @ts-ignore
  output: process.stdout,
});

let readInputLines = [];
const answers = [];
let totalTestCases;
let numberOfCalculations = 0;
let N;
let M;
let countUserInput = 0;
rl.on("line", (line) => {
  readInputLines.push(line);
  console.log("Length of readInputLines", readInputLines.length);
  countUserInput += 1;
  if (countUserInput === 1) {
    totalTestCases = parseInt(line);
    readInputLines = [];
    console.log("Number of total lines", totalTestCases);
  }
  if (readInputLines.length === 1) {
    let input = readInputLines[0];
    input = input.split(" ").map((char) => parseInt(char));
    N = input[0];
    M = input[1];
    console.log("N, M", N, M);
  }

  if (readInputLines.length === N + 1) {
    console.log("Finished taking input for this iteration", readInputLines);
    const ans = calculateDistances(N, M, readInputLines.slice(1));
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

const calculateDistances = (N, M, inputMatrix) => {
  console.log(inputMatrix);
  inputMatrix = inputMatrix.map((line) =>
    line.split("").map((char) => parseInt(char))
  );
  console.log(inputMatrix);

  let ans = new Array(N);

  for (let i = 0; i < N; i++) {
    ans[i] = new Array(M);
    for (let j = 0; j < M; j++) {
      ans[i][j] = Number.MAX_VALUE;
    }
  }

  // For each cell
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) {
      // Traversing the whole matrix
      // to find the minimum distance.
      for (let k = 0; k < N; k++)
        for (let l = 0; l < M; l++) {
          // If cell contain 1, check
          // for minimum distance.
          if (inputMatrix[k][l] === 1)
            ans[i][j] = Math.min(ans[i][j], Math.abs(i - k) + Math.abs(j - l));
        }
    }
  return ans;
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

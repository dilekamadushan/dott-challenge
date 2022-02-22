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
let count;
rl.on("line", (line) => {
  readInputLines.push(line);
  if (readInputLines.length === 1) {
    count = parseInt(line);
    console.log("Number of total lines", count);
  }

  if (readInputLines.length === count * 4 + 1) {
    console.log("Finished taking input", readInputLines);
    calculateDistances();
  }
});

/*readInputLines = [
  [3, 4],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [1, 0, 0, 0],
];*/

const calculateDistances = () => {
  readInputLines.shift();
  console.log(readInputLines);
  readInputLines = readInputLines.map((line) =>
    line.split("").map((char) => parseInt(char))
  );
  console.log(readInputLines);
  let index = 0;
  while (index < readInputLines.length) {
    const N = readInputLines[index][0];
    const mat = readInputLines.slice(index + 1, index + 1 + N);
    const M = readInputLines[index][1];
    let ans = new Array(readInputLines[index][0]);
    index += N + 1;

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
            if (mat[k][l] === 1)
              ans[i][j] = Math.min(
                ans[i][j],
                Math.abs(i - k) + Math.abs(j - l)
              );
          }
      }
    printMatrix(ans);
  }
};

const printMatrix = (ans) => {
  // Printing the answer.
  for (let i = 0; i < ans.length; i++) {
    let line = "";
    for (let j = 0; j < ans[i].length; j++) {
      line += ans[i][j] + " ";
    }
    console.log(line);
  }
};

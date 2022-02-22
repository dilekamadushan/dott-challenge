// import the required library
// @ts-ignore
var readline = require("readline");
var rl = readline.createInterface({
    // @ts-ignore
    input: process.stdin,
    // @ts-ignore
    output: process.stdout
});
var readInputLines = [];
var answers = [];
var totalTestCases;
var numberOfCalculations = 0;
var N;
var M;
var countUserInput = 0;
rl.on("line", function (line) {
    readInputLines.push(line);
    console.log("Length of readInputLines", readInputLines.length);
    countUserInput += 1;
    if (countUserInput === 1) {
        totalTestCases = parseInt(line);
        readInputLines = [];
        console.log("Number of total lines", totalTestCases);
    }
    if (readInputLines.length === 1) {
        var input = readInputLines[0];
        input = input.split(" ").map(function (char) { return parseInt(char); });
        N = input[0];
        M = input[1];
        console.log("N, M", N, M);
    }
    if (readInputLines.length === N + 1) {
        console.log("Finished taking input for this iteration", readInputLines);
        var ans = calculateDistances(N, M, readInputLines.slice(1));
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
/*readInputLines = [
  [3, 4],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [1, 0, 0, 0],
];*/
var calculateDistances = function (N, M, inputMatrix) {
    console.log(inputMatrix);
    inputMatrix = inputMatrix.map(function (line) {
        return line.split("").map(function (char) { return parseInt(char); });
    });
    console.log(inputMatrix);
    var ans = new Array(N);
    for (var i = 0; i < N; i++) {
        ans[i] = new Array(M);
        for (var j = 0; j < M; j++) {
            ans[i][j] = Number.MAX_VALUE;
        }
    }
    // For each cell
    for (var i = 0; i < N; i++)
        for (var j = 0; j < M; j++) {
            // Traversing the whole matrix
            // to find the minimum distance.
            for (var k = 0; k < N; k++)
                for (var l = 0; l < M; l++) {
                    // If cell contain 1, check
                    // for minimum distance.
                    if (inputMatrix[k][l] === 1)
                        ans[i][j] = Math.min(ans[i][j], Math.abs(i - k) + Math.abs(j - l));
                }
        }
    return ans;
};
var printMatrix = function (ans) {
    // Printing the answer.
    console.log("printing the answers", ans);
    for (var k = 0; k < ans.length; k++) {
        for (var i = 0; i < ans[k].length; i++) {
            var line = "";
            for (var j = 0; j < ans[k][i].length; j++) {
                line += ans[k][i][j] + " ";
            }
            console.log(line);
        }
        console.log("\n");
    }
};

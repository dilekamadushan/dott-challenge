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
var count;
rl.on('line', function (line) {
    readInputLines.push(line);
    if (readInputLines.length === 1) {
        count = parseInt(line);
        console.log('Number of total lines', count);
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
var calculateDistances = function () {
    readInputLines.shift();
    console.log(readInputLines);
    readInputLines = readInputLines.map(function (line) { return line.split('').map(function (char) { return parseInt(char); }); });
    console.log(readInputLines);
    var index = 0;
    while (index < readInputLines.length) {
        var N = readInputLines[index][0];
        var mat = readInputLines.slice(index + 1, index + 1 + N);
        var M = readInputLines[index][1];
        var ans = new Array(readInputLines[index][0]);
        index += N + 1;
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
                        if (mat[k][l] == 1)
                            ans[i][j] = Math.min(ans[i][j], Math.abs(i - k) + Math.abs(j - l));
                    }
            }
        printMatrix(ans);
    }
};
var printMatrix = function (ans) {
    // Printing the answer.
    for (var i = 0; i < ans.length; i++) {
        var line = "";
        for (var j = 0; j < ans[i].length; j++) {
            line += ans[i][j] + " ";
        }
        console.log(line);
    }
};

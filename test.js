const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const graph = input.slice(1).map((el) =>
  el
    .trim()
    .split("")
    .map((v) => +v)
);

let answer = [];
const min = 1;
const max = Math.min(graph.length, graph[0].length);

for (let i = min; i <= max; i++) {
  for (let row = 0; row <= graph.length - max; row++) {
    for (let col = 0; col <= graph[0].length - max; col++) {
      const rowCut = [...graph].splice(row, i);
      const arr = [...rowCut].map((el) => [...el].splice(col, i));

      if (arr[0][0] === arr[0][i - 1] && arr[0][i - 1] === arr[i - 1][0] && arr[i - 1][0] === arr[i - 1][i - 1]) answer.push(i);
    }
  }
}

console.log(Math.max(...answer) ** 2);

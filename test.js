const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const N = +input[0];
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
const tt = [];
let answer = 0;

for (let i = 0; i < N; i++) {
  tt.push([arr[i][0], 1]);
  tt.push([arr[i][1], -1]);
}

tt.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

console.log(tt);

let count = 0;

for (let i = 0; i < tt.length; i++) {
  count += tt[i][1];
  if (answer < count) answer = count;
}

console.log(answer);

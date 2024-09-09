const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

if (arr[0] !== 1) {
  console.log(1);
  return;
}

let sum = 1;

for (let i = 1; i < N; i++) {
  if (arr[i] <= sum || arr[i] - sum === 1) sum += arr[i];
  else {
    console.log(sum + 1);
    return;
  }
}

console.log(sum + 1);
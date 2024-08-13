const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((v) => +v));

const [N, M] = input[0];
const numbers = input[1];
const arr = input.slice(2);
const prefixSum = Array(N + 1).fill(0);
let answer = [];

for (let i = 0; i < N; i++) {
  prefixSum[i + 1] = prefixSum[i] + numbers[i];
}

for (let i = 0; i < arr.length; i++) {
  answer.push(prefixSum[arr[i][1]] - prefixSum[arr[i][0] - 1]);
}

console.log(answer.join("\n"));
const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
const dp = Array.from({ length: K + 1 }, () => 0);
console.log(dp);

for (let i = 0; i < N; i++) {
  for (let j = K; j >= arr[i][0]; j--) {
    dp[j] = Math.max(dp[j - arr[i][0]] + arr[i][1], dp[j]);
  }
}

console.log(dp.at(-1));

const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [C, N] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
const dp = Array.from({ length: C + 1 }, () => Number.MAX_SAFE_INTEGER);

dp[0] = 0;

for (let i = 0; i < N; i++) {
  for (let j = 1; j < dp.length; j++) {
    if (arr[i][1] > j) dp[j] = Math.min(arr[i][0], dp[j]);
    else dp[j] = Math.min(dp[j - arr[i][1]] + arr[i][0], dp[j]);
  }
}

console.log(dp.at(-1));

const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr = input.slice(1).map(Number);
const dp = Array.from({ length: N }, () => []);

if (arr.length === 1) {
  console.log(arr[0]);
  return;
}

dp[0] = [arr[0], 0];
dp[1] = [arr[1], arr[0] + arr[1]];

for (let i = 2; i < dp.length; i++) {
  const jump1 = dp[i - 1][0] + arr[i];
  const jump2 = Math.max(...dp[i - 2]) + arr[i];

  dp[i] = [jump2, jump1];
}
console.log(Math.max(...dp.at(-1)));
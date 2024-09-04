const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const T = +input[0];
const arr = input.slice(1);

const coins_Arr = [];
const M_Arr = [];
let answer = [];

for (let i = 1; i < arr.length; i++) {
  coins_Arr.push(arr[i++].split(" ").map(Number));
  M_Arr.push(+arr[i++]);
}

for (let i = 0; i < T; i++) {
  const coins = coins_Arr[i];
  const M = M_Arr[i];
  const dp = Array.from({ length: M + 1 }, () => 0);
  dp[0] = 1;

  for (let j = 0; j <= coins.length; j++) {
    for (let k = coins[j]; k < dp.length; k++) {
      dp[k] = dp[k] + dp[k - coins[j]];
    }
  }

  answer.push(dp.at(-1));
}

console.log(answer.join("\n"));
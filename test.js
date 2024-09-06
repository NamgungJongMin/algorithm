const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.split(" ").slice(1).map(Number));
const dp = Array.from({ length: arr.length + 1 }, () => Array(arr[0].length).fill(0));
const count = Array.from({ length: arr.length + 1 }, () => Array(arr[0].length).fill(0));
let answer = [];

for (let i = 1; i < dp.length; i++) {
  for (let j = 0; j < dp[0].length; j++) {
    if (j === 0) {
      dp[i][j] = arr[i - 1][j];
      count[i][j] = i;
      continue;
    }

    let max = dp[i][j - 1];

    for (let k = i; k > 0; k--) {
      const newProfit = arr[k - 1][j] + dp[i - k][j - 1];

      if (max < newProfit) {
        max = newProfit;
      }
    }

    dp[i][j] = max;
  }
}

console.log(dp);
console.log(count);

// answer.push(dp.at(-1).at(-1));
// console.log(answer);

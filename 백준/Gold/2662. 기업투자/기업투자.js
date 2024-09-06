const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.split(" ").slice(1).map(Number));
const dp = Array.from({ length: arr.length + 1 }, () => Array(arr[0].length).fill(0));
const count = Array.from({ length: arr.length + 1 }, () =>
  Array.from({ length: arr[0].length }, () => Array(arr[0].length).fill(0))
);

for (let i = 1; i < dp.length; i++) {
  for (let j = 0; j < dp[0].length; j++) {
    let invest = Array.from({ length: arr[0].length }, () => 0);

    if (j === 0) {
      dp[i][j] = arr[i - 1][j];
      invest[j] = i;
      count[i][j] = invest;
      continue;
    }

    let max = dp[i][j - 1];
    invest = [...count[i][j - 1]];

    for (let k = i; k > 0; k--) {
      const newProfit = arr[k - 1][j] + dp[i - k][j - 1];

      if (max < newProfit) {
        max = newProfit;
        invest = [...count[i - k][j - 1]];
        invest[j] += k;
      }
    }

    dp[i][j] = max;
    count[i][j] = invest;
  }
}

console.log(dp.at(-1).at(-1));
console.log(count.at(-1).at(-1).join(" "));
const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const str1 = input[0].replace("\r", "");
const str2 = input[1];
const dp = Array.from({ length: str1.length + 1 }, () => Array.from({ length: str2.length + 1 }, () => 0));

for (let i = 0; i < str1.length; i++) {
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      dp[i + 1][j + 1] = dp[i][j] + 1;
    } else {
      dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
    }
  }
}
console.log(dp.at(-1).at(-1));
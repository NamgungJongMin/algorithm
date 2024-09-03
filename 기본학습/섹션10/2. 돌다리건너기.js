const N = 7;
const dp = [1, 2];

while (dp.length < N) {
  dp.push(dp[dp.length - 1] + dp[dp.length - 2]);
}

console.log(dp.at(-1) + dp.at(-2));

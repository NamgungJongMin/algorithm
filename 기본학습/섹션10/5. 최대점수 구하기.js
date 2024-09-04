const N = 5;
const M = 20;
const input = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
const dp = Array.from({ length: M + 1 }, () => 0);

for (let i = 0; i < N; i++) {
  for (let j = M; j >= input[i][1]; j--) {
    dp[j] = Math.max(dp[j - input[i][1]] + input[i][0], dp[j]);
  }
}

console.log(dp.at(-1));

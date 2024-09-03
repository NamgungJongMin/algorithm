// 냅색
// dp => i 금액을 거슬러주는데 사용된 최소 동전 개수
// 동전 종류만큼 순회하면서 dp 배열 계속 재할당

const N = 3;
const coins = [1, 5, 2];
const change = 15;
const dp = Array.from({ length: change + 1 }, () => 1000);
dp[0] = 0;

for (let i = 0; i < coins.length; i++) {
  for (let j = coins[i]; j < dp.length; j++) {
    dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
  }
}

console.log(dp[change]);

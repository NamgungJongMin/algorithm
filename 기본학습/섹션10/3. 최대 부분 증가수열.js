const N = 8;
const arr = [5, 3, 7, 8, 6, 2, 9, 4];
const dp = Array.from({ length: N });

dp[0] = 1;

for (let i = 1; i < arr.length; i++) {
  let max = 0;

  for (let j = i - 1; j >= 0; j--) {
    if (arr[j] < arr[i] && dp[j] > max) {
      max = dp[j];
    }
  }

  dp[i] = max + 1;
}

console.log(Math.max(...dp));

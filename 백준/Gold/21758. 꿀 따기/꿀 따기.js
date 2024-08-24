const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number);
const prefixSum = Array(N + 1).fill(0);
let answer = 0;

arr.reduce((acc, cur, idx) => {
  prefixSum[idx + 1] = acc + cur;
  return acc + cur;
}, 0);

// 벌 - 벌 - 꿀
// 맨 왼쪽 벌 고정, 맨 오른쪽 벌통 고정 -> 나머지 벌 하나 위치잡기
for (let i = 1; i < arr.length - 1; i++) {
  const bee1 = prefixSum[N] - prefixSum[1] - arr[i];
  const bee2 = prefixSum[N] - prefixSum[i + 1];
  const sum = bee1 + bee2;
  if (sum > answer) {
    answer = sum;
  }
}

// 꿀 - 벌 - 벌
// 맨 오른쪽 벌 고정, 맨 왼쪽 벌통 고정 -> 나머지 벌 하나 위치잡기
for (let i = arr.length - 2; i > 0; i--) {
  const bee1 = prefixSum[N - 1] - arr[i];
  const bee2 = prefixSum[i];
  const sum = bee1 + bee2;
  if (sum > answer) {
    answer = sum;
  }
}
// 벌 - 꿀 - 벌
// 양쪽 끝 벌 고정 -> 벌통 위치 잡기
for (let i = 1; i < arr.length - 1; i++) {
  const bee1 = prefixSum[i + 1] - prefixSum[1];
  const bee2 = prefixSum[N - 1] - prefixSum[i];
  const sum = bee1 + bee2;
  if (sum > answer) {
    answer = sum;
  }
}

console.log(answer);
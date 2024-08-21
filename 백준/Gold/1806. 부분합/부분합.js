const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, S] = input[0].split(" ").map((el) => +el.trim());
const arr = input[1].split(" ").map(Number);
const prefixSum = Array(N + 1).fill(0);
let answer = Number.MAX_SAFE_INTEGER;

arr.reduce((acc, cur, idx) => {
  prefixSum[idx + 1] = acc + cur;
  return acc + cur;
}, 0);

if (prefixSum.at(-1) < S) {
  console.log(0);
  return;
}

let lt = 1;
let rt = 1;

while (lt < prefixSum.length && rt < prefixSum.length) {
  const sum = prefixSum[rt] - prefixSum[lt - 1];
  const length = rt - lt + 1;

  if (sum < S) {
    rt++;
  } else {
    if (answer > length) answer = length;

    if (lt === rt) {
      lt++;
      rt++;
    } else lt++;
  }
}

console.log(answer);
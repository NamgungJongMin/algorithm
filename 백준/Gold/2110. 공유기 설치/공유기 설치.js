const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, C] = input[0].trim().split(" ").map(Number);
const arr = input.slice(1).map(Number);

arr.sort((a, b) => a - b);

const count = (dist) => {
  let cnt = 1;
  let ep = arr[0];
  for (let i = 1; i < N; i++) {
    if (arr[i] - ep >= dist) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
};

let start = 1;
let end = arr.at(-1);
let answer;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (count(mid) >= C) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
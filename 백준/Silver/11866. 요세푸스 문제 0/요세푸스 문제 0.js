const fs = require("fs");
const [N, K] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
const circle = Array(N).fill(0);
const answer = [];
circle.forEach((_, idx, arr) => (arr[idx] = idx + 1));

let count = 0;
while (true) {
  if (circle.length === 1) {
    answer.push(circle[0]);
    break;
  }

  count++;
  if (count === K) {
    answer.push(...circle.splice(0, 1));
    count = 0;
  } else {
    circle.push(circle.shift());
  }
}

console.log(`<${answer.join(", ")}>`);
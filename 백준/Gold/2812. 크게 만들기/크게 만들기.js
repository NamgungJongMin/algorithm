const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
let count = +K;
let target = input[1].split("");
let answer = [target[0]];

for (let i = 1; i < target.length; i++) {
  let compare = answer.pop();

  while (count > 0 && compare < target[i]) {
    count--;
    compare = answer.pop();
  }

  if (compare) answer.push(compare);
  if (answer.length === N - K) break;
  answer.push(target[i]);
}

console.log(answer.join(""));
const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].trim().split(" ");
const arr = input[1].split(" ").map(Number);
const diff = [];

for (let i = 1; i < arr.length; i++) {
  diff.push(arr[i] - arr[i - 1]);
}
diff.sort((a, b) => b - a);

const answerArr = diff.slice(K - 1);
console.log(answerArr.reduce((acc, cur) => acc + cur, 0));
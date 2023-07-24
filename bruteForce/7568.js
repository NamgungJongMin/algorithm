/* ----------------------------- 7568 덩치 (브루트포스) ---------------------------- */

const fs = require("fs");
const input = require("fs").readFileSync("./7568.txt").toString().trim().split("\n");
input.shift();
const kgCmArr = input.map((kgCm) => kgCm.split(" ").map((num) => parseInt(num)));
let answerArr = [];

for (let i = 0; i < kgCmArr.length; i++) {
  let count = 0;

  for (let j = 0; j < kgCmArr.length; j++) {
    if (i === j) continue;
    if (kgCmArr[i][0] < kgCmArr[j][0] && kgCmArr[i][1] < kgCmArr[j][1]) {
      count++;
    }
  }
  answerArr.push(count + 1);
}

console.log(answerArr.join(" "));

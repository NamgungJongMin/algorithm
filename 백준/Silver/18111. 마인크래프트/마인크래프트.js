const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((v) => +v));
const inven = input[0][2];
const arr = input.slice(1).reduce((acc, cur) => acc.concat(cur));
arr.sort((a, b) => b - a);

const answer = [];
let start = Math.min(...arr);
let end = Math.max(...arr);

for (let i = start; i <= end; i++) {
  let time = 0;
  let isSuccess = true;
  let surplus = inven;

  for (let j = 0; j < arr.length; j++) {
    if (!isSuccess) break;
    let gap = arr[j] - i;

    if (gap > 0) {
      time += gap * 2;
      surplus += gap;
    } else if (gap < 0) {
      if (surplus >= Math.abs(gap)) {
        time += Math.abs(gap);
        surplus -= Math.abs(gap);
      } else {
        isSuccess = false;
      }
    }
  }

  if (isSuccess) answer.push([time, i]);
}

answer.sort((a, b) => {
  if (a[0] === b[0]) return b[1] - a[1];
  else return a[0] - b[0];
});

console.log(answer[0].join(" "));

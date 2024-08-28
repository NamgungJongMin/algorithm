const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
const timeTable = new Map();

for (let i = 0; i < arr.length; i++) {
  timeTable.set(arr[i][0], timeTable.get(arr[i][0]) ? timeTable.get(arr[i][0]) + 1 : 1);
  timeTable.set(arr[i][1], timeTable.get(arr[i][1]) ? timeTable.get(arr[i][1]) - 1 : -1);
}

const answerArr = Array.from(timeTable).sort((a, b) => a[0] - b[0]);
let answer = 0;
let lectures = 0;

answerArr.forEach((el) => {
  lectures += el[1];
  if (lectures > answer) answer = lectures;
});

console.log(answer);

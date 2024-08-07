const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [volume, reachTime] = input[0].split(" ").map((el) => +el);
const bus = input.slice(1).map((el) => el.split(" ").map((v) => +v));
const answer = [];

for (let i = 0; i < volume; i++) {
  let time = bus[i][0];

  for (let j = 1; j < bus[i][2]; j++) {
    if (time >= reachTime) break;
    time += bus[i][1];
  }

  if (time >= reachTime) answer.push(time);
}
console.log(answer.length !== 0 ? Math.min(...answer) - reachTime : -1);
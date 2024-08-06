const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const previous = [
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "Never gonna stop",
];

const compareStr = input.slice(1, input.length).map((str) => str.trim());
let answer = "No";

compareStr.forEach((str) => (!previous.includes(str) ? (answer = "Yes") : null));
console.log(answer);
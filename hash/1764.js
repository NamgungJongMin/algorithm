const fs = require("fs");
const input = fs.readFileSync("./1764.txt").toString().trim().split("\n");

let map = new Map();
let answerArr = [];
let count = 0;

input.map((name, index) => {
  if (index === 0) return;
  map.set(name, map.get(name) + 1 || 1);
});

for (const [key, value] of map) {
  if (value === 2) {
    count++;
    answerArr.push(key);
  }
}

answerArr.sort();

console.log(count);
answerArr.map((el) => {
  console.log(el);
});

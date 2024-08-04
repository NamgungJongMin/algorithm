const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

// console.log(input);

const answer = [];

const first = [];
const second = [];
const third = [];

for (let i = 1; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    first.push(input.slice(0, i).reverse().join(""));
    second.push(input.slice(i, j).reverse().join(""));
    third.push(input.slice(j).reverse().join(""));
  }
}

for (let i = 0; i < first.length; i++) {
  answer.push([first[i], second[i], third[i]].join(""));
}

console.log(answer.sort()[0]);
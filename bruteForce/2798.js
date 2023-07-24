const fs = require("fs");
const input = require("fs").readFileSync("./2798.txt").toString().trim().split("\n");
const pick = +input.shift().split(" ")[1];
const cards = input[0].split(" ").map((el) => +el);
let max = 0;

for (let i = 0; i < cards.length - 2; i++) {
  for (let j = i + 1; j < cards.length - 1; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      let sum = cards[i] + cards[j] + cards[k];

      if (sum > pick) continue;
      else if (sum > max) max = sum;
    }
  }
}

console.log(max);

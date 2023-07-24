const fs = require("fs");
const input = fs.readFileSync("./10816.txt").toString().trim().split("\n");

let cards = new Map();
let answer = [];

input[1]
  .split(" ")
  .map((el) => +el)
  .map((card) => {
    cards.set(card, cards.get(card) + 1 || 1);
  });

input[3]
  .split(" ")
  .map((el) => +el)
  .map((compareNumber) => {
    answer.push(cards.get(compareNumber) ?? 0);
  });

console.log(...answer);

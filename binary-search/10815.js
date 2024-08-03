const fs = require("fs");

const input = fs.readFileSync("10815.txt").toString().trim().split("\n");

const heldCards = input[1]
  .split(" ")
  .sort((a, b) => a - b)
  .map((v) => +v);
const comparedCards = input[3].split(" ").map((v) => +v);
const answer = [];

// console.log(heldCards, comparedCards);

const checkCards = (card) => {
  let start = 0;
  let end = heldCards.length - 1;
  let same = false;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (card < heldCards[mid]) end = mid - 1;
    else if (card > heldCards[mid]) {
      start = mid + 1;
    } else {
      same = true;
      break;
    }
  }

  return same ? 1 : 0;
};

for (let i = 0; i < comparedCards.length; i++) {
  answer.push(checkCards(comparedCards[i]));
}

console.log(answer.join(" "));

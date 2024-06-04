const fs = require("fs");
const input = fs.readFileSync("./27961.txt").toString().trim();

let count = 1;
let cats = 1;

while (cats < input) {
  count++;

  for (let i = cats * 2; i > 0; i--) {
    if (cats + i <= input) {
      cats += i;
      console.log(i);
      break;
    }
  }
}

console.log(cats);
console.log(count);

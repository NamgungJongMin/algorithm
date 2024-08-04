const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const rc = input[0].split(" ").map((v) => +v);
const colors = input.slice(1).map((el) => el.trim().split(""));
let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= rc[0] - 8; i++) {
  for (let j = 0; j <= rc[1] - 8; j++) {
    const rowCut = [...colors].splice(i, 8);
    const arr = [...rowCut].map((el) => [...el].splice(j, 8));
    let count = 0;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (row % 2 === 0) {
          if (col % 2 === 0) arr[row][col] === "B" ? count++ : null;
          else arr[row][col] === "W" ? count++ : null;
        }

        if (row % 2 === 1) {
          if (col % 2 === 0) arr[row][col] === "W" ? count++ : null;
          else arr[row][col] === "B" ? count++ : null;
        }
      }
    }

    if (count < answer) answer = count;
    count = 0;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (row % 2 === 0) {
          if (col % 2 === 0) arr[row][col] === "W" ? count++ : null;
          else arr[row][col] === "B" ? count++ : null;
        }

        if (row % 2 === 1) {
          if (col % 2 === 0) arr[row][col] === "B" ? count++ : null;
          else arr[row][col] === "W" ? count++ : null;
        }
      }
    }

    if (count < answer) answer = count;
  }
}

console.log(answer);

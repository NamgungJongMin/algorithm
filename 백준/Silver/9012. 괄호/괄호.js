const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n").slice(1);

input.forEach((el) => {
  const map = new Map();
  const arr = el.trim().split("");
  let volumeL = 0;
  let volumeR = 0;

  arr.forEach((lr) => map.set(lr, map.get(lr) + 1 || 1));

  if (map.get("(") !== map.get(")")) console.log("NO");
  else {
    let isCorrect = true;

    arr.forEach((el) => {
      el === "(" ? volumeL++ : volumeR++;
      if (volumeL < volumeR) isCorrect = false;
    });

    console.log(isCorrect ? "YES" : "NO");
  }
});
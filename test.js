const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const M = +input[0];
const t = input.slice(1).map((el) => el.split(" ").map((v) => v.trim()));
const map = new Map();
const allEl = Array.from({ length: 20 }, (_, index) => index + 1);

for ([command, x] of t) {
  if (command === "add") map.set(Number(x), 1);
  if (command === "remove") map.delete(Number(x));
  if (command === "check") console.log(map.has(Number(x)) ? 1 : 0);
  if (command === "toggle") map.has(Number(x)) ? map.delete(Number(x)) : map.set(Number(x), 1);
  if (command === "all")
    allEl.forEach((el) => {
      map.set(el, 1);
    });
  if (command === "empty") map.clear();
}

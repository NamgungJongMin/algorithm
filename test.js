const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.trim().split(" ").map(Number));
const dailyPrice = Array(10000).fill(0);

arr.sort((a, b) => {
  if (a[0] === b[0]) b[1] - a[1];
  return b[0] - a[0];
});

for (let i = 0; i < arr.length; i++) {
  for (let date = arr[i][1]; date > 0; date--) {
    if (!dailyPrice[date]) {
      dailyPrice[date] = arr[i][0];
      break;
    }
  }
}

console.log(dailyPrice.reduce((acc, cur) => acc + cur, 0));

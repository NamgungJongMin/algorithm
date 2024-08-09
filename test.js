const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const arr = input.map((el) => el.split(" ").map((v) => v.trim()));

arr.forEach((el) => {
  if (el.length === 1) return;
  let str = "";

  for (let i = 0; i < el[1].length; i++) {
    for (let j = 1; j <= +el[0]; j++) {
      str += el[1][i];
    }
  }

  console.log(str);
});

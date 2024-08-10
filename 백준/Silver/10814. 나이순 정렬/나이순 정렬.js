const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.split(" "));

arr.sort((a, b) => {
  if (+a[0] > +b[0]) return 1;
  else if (+a[0] < +b[0]) return -1;
  else return 0;
});

arr.forEach((el) => console.log(`${el[0]} ${el[1]}`));
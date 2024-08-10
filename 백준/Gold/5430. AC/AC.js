const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.trim());
const group = [];

while (arr.length > 0) {
  group.push(arr.splice(0, 3));
}
//100
group.forEach(([fn, n, target]) => {
  const fnArr = fn.split("");
  const targetArr = JSON.parse(target);
  let isReverse = false;
  let isError = false;
  let start = 0;
  let end = targetArr.length - 1;

  fnArr.forEach((el) => {
    if (el === "R") isReverse = !isReverse;
    else if (el === "D") {
      if (start > end) isError = true;
      isReverse ? end-- : start++;
    }
  });
  let answerArr = targetArr.slice(start, end + 1);
  if (isError) console.log("error");
  else console.log(JSON.stringify(isReverse ? answerArr.reverse() : answerArr));
});
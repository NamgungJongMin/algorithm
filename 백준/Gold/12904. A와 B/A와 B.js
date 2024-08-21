const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const S = input[0].trim().split("");
const T = input[1].split("");
const obj = { A: 0, B: 0 };
const needPop = T.length - S.length;

T.forEach((el) => {
  if (el === "A") obj.A += 1;
  else obj.B += 1;
});

S.forEach((el) => {
  if (el === "A") obj.A -= 1;
  else obj.B -= 1;
});

for (let i = 1; i <= needPop; i++) {
  const targetIdx = T.length - 1;
  if (obj[T[targetIdx]] > 0) {
    if (T[targetIdx] === "A") {
      T.pop();
      obj[T[targetIdx]]--;
    } else if (T[targetIdx] === "B") {
      obj[T[targetIdx]]--;
      T.pop();
      T.reverse();
    }
  } else break;
}

console.log(T.join("") === S.join("") ? 1 : 0);
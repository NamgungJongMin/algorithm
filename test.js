const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
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

// const input = require("fs").readFileSync("test.txt").toString().trim().split("\n");

// input.shift();

// const Delete = (arr, isR) => {
//   if (isR) {
//     arr.pop();
//     return arr;
//   }

//   if (!isR) {
//     arr.shift();
//     return arr;
//   }
// };

// for (let i = 0; i < input.length; i += 3) {
//   const command = input[i].split("");
//   let array = JSON.parse(input[i + 2]);
//   let isReverse = false;
//   let isError = false;
//   console.log(array);

//   for (let j = 0; j < command.length; j++) {
//     if (command[j] === "R") {
//       isReverse = !isReverse;
//     }
//     if (command[j] === "D") {
//       if (array.length === 0) {
//         isError = true;
//       }
//       array = Delete(array, isReverse);
//     }
//   }

//   console.log(isError ? "error" : JSON.stringify(isReverse ? array.reverse() : array));
// }

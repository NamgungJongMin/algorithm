// function solution(str1, str2) {
//   let answer = "YES";
//   let sH = new Map();
//   for (let x of str1) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   for (let x of str2) {
//     if (!sH.has(x) || sH.get(x) == 0) return "NO";
//     sH.set(x, sH.get(x) - 1);
//   }
//   return answer;

//   // if (str1.length !== str2.length) return "NO";

//   // let map = new Map();
//   // let answer = "YES";

//   // str1.split("").map((value) => {
//   //   map.set(value, map.get(value) + 1 || 1);
//   // });

//   // str2.split("").map((value) => {
//   //   map.set(value, map.get(value) - 1);
//   // });

//   // for ([key, value] of map) {
//   //   if (value !== 0) answer = "NO";
//   // }

//   // return answer;
// }

function solution(str1, str2) {
  let answer = "YES";
  let map = new Map();

  str1
    .toUpperCase()
    .split("")
    .forEach((el) => map.set(el, map.get(el) + 1 || 1));

  str2
    .toUpperCase()
    .split("")
    .forEach((el) => {
      map.set(el, map.get(el) - 1);
    });

  map.forEach((value) => {
    if (value !== 0) answer = "NO";
  });

  return answer;
}

function sol(str1, str2) {
  let str1C = str1.split("").sort().join("");
  let str2C = str2.split("").sort().join("");
  console.log(str1C, str2C);

  return str1C === str2C ? "YES" : "NO";
}

let a = "0a4b2c";
let b = "cb42a0";
console.log(solution(a, b));
console.log(sol(a, b));

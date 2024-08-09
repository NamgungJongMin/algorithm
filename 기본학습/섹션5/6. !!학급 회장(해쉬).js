// function solution(s) {
//   let answer;
//   let sH = new Map();
//   for (let x of s) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let [key, val] of sH) {
//     if (val > max) {
//       max = val;
//       answer = key;
//     }
//   }
//   return answer;
// }

function solution(s) {
  let answer = "";
  let max = 0;
  let arr = s.split("");
  let map = new Map();

  arr.forEach((el) => map.set(el, map.get(el) + 1 || 1));
  map.forEach((value, key) => {
    if (value > max) {
      answer = key;
      max = value;
    }
  });

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

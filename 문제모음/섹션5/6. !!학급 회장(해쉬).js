function solution(s) {
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

  let map = new Map();
  let max = 0;
  let answer = "";

  s.split("").map((value) => {
    map.set(value, map.get(value) + 1 || 1);
  });

  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

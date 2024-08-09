function solution(str) {
  //   let answer = "";
  //   for (let x of str) {
  //     if (!isNaN(x)) answer += x;
  //   }
  //   return parseInt(answer);

  str = str.replace(/[^0-9]/g, "");

  return Number(str);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

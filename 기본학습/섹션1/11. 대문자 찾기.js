function solution(s) {
  //   let answer = 0;
  //   for (let x of s) {
  //     //let num=x.charCodeAt();
  //     //if(num>=65 && num<=90) answer++;
  //     if (x === x.toUpperCase()) answer++;
  //   }

  let reg = /[A-Z]/g;
  let upper = s.match(reg);
  console.log(upper);

  return upper.length;
}

let str = "KoreaTimeGood";
console.log(solution(str));

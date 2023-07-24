function solution(a, b) {
  //   let answer = "";
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] === b[i]) answer += "D ";
  //     else if (a[i] === 1 && b[i] === 3) answer += "A ";
  //     else if (a[i] === 2 && b[i] === 1) answer += "A ";
  //     else if (a[i] === 3 && b[i] === 2) answer += "A ";
  //     else answer += "B ";
  //   }
  //   return answer;

  let answer = "";

  const findWinner = (ai, bi) => {
    if (ai === 1) {
      if (bi === 1) return "D";
      if (bi === 2) return "B";
      if (bi === 3) return "A";
    }
    if (ai === 2) {
      if (bi === 1) return "A";
      if (bi === 2) return "D";
      if (bi === 3) return "B";
    }
    if (ai === 3) {
      if (bi === 1) return "B";
      if (bi === 2) return "A";
      if (bi === 3) return "D";
    }
  };

  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    answer += findWinner(a[i], b[i]);
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

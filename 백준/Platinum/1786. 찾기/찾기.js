const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().split("\n");
const T = input[0].split("");
const P = input[1].split("");
const pi = Array(P.length).fill(0);

// failure 함수를 통해 pi 배열 설정
let k = 0;
for (let i = 1; i < P.length; i++) {
  while (k > 0 && P[k] !== P[i]) {
    k = pi[k - 1];
  }

  if (P[k] === P[i]) {
    pi[i] = k + 1;
    k++;
  }
}

// pi 배열을 이용해 문자열 찾기
let j = 0;
const appearIdx = [];
for (let i = 0; i < T.length; i++) {
  while (j > 0 && P[j] !== T[i]) {
    j = pi[j - 1];
  }

  if (P[j] === T[i]) {
    if (j === P.length - 1) {
      appearIdx.push(i - P.length + 2);
      j = pi[j];
    } else {
      j++;
    }
  }
}

console.log(appearIdx.length + "\n" + appearIdx.join(" "));
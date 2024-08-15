// https://www.acmicpc.net/problem/2212
// 초기값 설정을 안할경우 입력되는 배열에 따라 타입에러 발생 가능성이 생김

const fs = require("fs");
const input = fs.readFileSync("2.txt").toString().trim().split("\n");
const K = +input[1];
const arr = input[2].split(" ").map((v) => +v);
const distances = [];

if (arr.length === 1) {
  console.log(0);
  return;
}

arr.sort((a, b) => a - b);

for (let i = 1; i < arr.length; i++) {
  distances.push(arr[i] - arr[i - 1]);
}

distances.sort((a, b) => a - b);

for (let i = 1; i < K; i++) {
  distances.pop();
}

console.log(distances.reduce((acc, cur) => acc + cur, 0));

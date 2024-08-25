const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const arr = input[1].split(" ").map(Number);
let answer = Array(3).fill(1000000000);

arr.sort((a, b) => a - b);

const sum = (arr) => arr.reduce((acc, cur) => acc + cur);

for (let i = 0; i < arr.length; i++) {
  let left = i + 1;
  let right = arr.length - 1;

  while (left < right) {
    if (Math.abs(sum([arr[i], arr[left], arr[right]])) < Math.abs(sum(answer))) {
      answer = [arr[i], arr[left], arr[right]];
    }

    if (arr[i] + arr[left] + arr[right] > 0) {
      right--;
    } else if (arr[i] + arr[left] + arr[right] < 0) {
      left++;
    } else break;
  }
}

console.log(...answer);

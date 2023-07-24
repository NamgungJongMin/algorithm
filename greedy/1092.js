const fs = require("fs");
const input = fs.readFileSync("./1092.txt").toString().trim().split("\n");

/* ------------------------- 탐욕 적용의 편의를 위해 큰수부터 순회하도록 배열 ------------------------ */
const crains = input[1]
  .split(" ")
  .map((el) => +el)
  .sort((a, b) => b - a);

let boxes = input[3]
  .split(" ")
  .map((el) => +el)
  .sort((a, b) => b - a);
/* ------------------------------------ - ----------------------------------- */

// 큰 수끼리 비교하여 최대 제한 크레인보다 높은 무게의 상자가 있을시 -1 할당
let answer = crains[0] < boxes[0] ? -1 : 0;

while (boxes.length > 0 && answer !== -1) {
  for (let i = 0; i < crains.length; i++) {
    // 모든 상자를 적재한 이후에 남는 크레인을 순회하지 않도록 early return
    if (boxes.length === 0) break;

    for (j = 0; j < boxes.length; j++) {
      if (crains[i] < boxes[j]) continue;

      boxes.splice(j, 1);
      break;
    }
  }

  answer++;
}

console.log(answer);

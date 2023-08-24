const fs = require('fs');

const input = fs.readFileSync('./15655.txt').toString().trim().split('\n');
const M = input[1].split(' ').map(v => +v);
const limit = Number(input[0].split(' ')[1]);
M.sort((a, b) => a - b);
// console.log(limit);

const visited = Array(limit + 1).fill(0);

const output = []; // 현재 수열에 포함된 원소

const recursive = count => {
  // 깊이가 M일때 함수를 멈춘다. (종료 조건)
  if (count === limit) {
    console.log(`${output.join(' ')}`);
  }

  // 원소를 선택하는 동작
  for (let i = 1; i <= M.length; i++) {
    // 이미 선택 되었던 원소라면 제외한다
    if (visited[i] === 1) continue;

    /* ------------------------------------ 재귀 호출하며 완성 ----------------------------------- */
    visited[i] = 1;
    output.push(M[i - 1]);
    recursive(count + 1);
    /* ------------------------------------ 원소의 조합이 완성된 뒤 visited 배열 초기화 ----------------------------------- */
    output.pop();
    visited[i] = 0;
  }
};

recursive(0);

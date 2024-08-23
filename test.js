const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.trim().split(" ").map(Number));

let answer = 0;
// 상 / 하 / 좌 / 우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const dirRel = [
  ["top", "bottom"],
  ["bottom", "top"],
  ["left", "right"],
  ["right", "left"],
];

const dfs = (depth, x, y, prevDir, sum) => {
  if (depth === 4) {
    if (sum > answer) answer = sum;
    return;
  }

  // 상 하 좌 우 이동
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (prevDir === dirRel[i][1]) continue;
    if (nx < 0 || nx >= arr[0].length || ny < 0 || ny >= arr.length) continue;

    dfs(depth + 1, nx, ny, dirRel[i][0], sum + arr[ny][nx]);
  }
};

// 4가지 폴리오미노 dfs로 확인
for (let i = 0; i < arr[0].length; i++) {
  for (let j = 0; j < arr.length; j++) {
    dfs(1, i, j, null, arr[j][i]);
  }
}

/* ----------------------------------------------------------------------- */
// ㅜ 상단 왼쪽부터 확인
const tri1 = [
  [1, 0],
  [1, 1],
  [2, 0],
];
// ㅗ 하단 오른쪽부터 확인
const tri2 = [
  [1, 0],
  [1, -1],
  [2, 0],
];
// ㅏ 상단 왼쪽부터 확인
const tri3 = [
  [0, 1],
  [1, 1],
  [0, 2],
];
// ㅓ 하단 오른쪽부터 확인
const tri4 = [
  [0, 1],
  [-1, 1],
  [0, 2],
];

for (let i = 0; i < arr[0].length; i++) {
  for (let j = 0; j < arr.length; j++) {
    let sum = arr[j][i];
    let sum1 = sum;
    let sum2 = sum;
    let sum3 = sum;
    let sum4 = sum;

    for (let k = 0; k < 3; k++) {
      if (i + 2 < arr[0].length && j + 1 < arr.length) sum1 += arr[j + tri1[k][1]][i + tri1[k][0]];
      if (i + 2 < arr[0].length && j - 1 >= 0) sum2 += arr[j + tri2[k][1]][i + tri2[k][0]];
      if (i + 1 < arr[0].length && j + 2 < arr.length) sum3 += arr[j + tri3[k][1]][i + tri3[k][0]];
      if (i - 1 >= 0 && j + 2 < arr.length) sum4 += arr[j + tri4[k][1]][i + tri4[k][0]];
    }

    const max = Math.max(sum1, sum2, sum3, sum4);
    if (max > answer) answer = max;
  }
}

console.log(answer);

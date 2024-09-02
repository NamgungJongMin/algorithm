const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
const check = Array.from(Array(N), () => Array(M).fill(0));
const safe = [];
const virus = [];
let answer = 0;

// check 배열 / 안전지대 / 바이러스 큐 초기화
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    check[i][j] = arr[i][j];

    if (arr[i][j] === 0) safe.push([i, j]);
    if (arr[i][j] === 2) virus.push(i, j);
  }
}

// 바이러스 전파 후 안전지대 개수 반환
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const bfs = (safeVolume, c, q) => {
  const checkArray = c.map((v) => [...v]);
  const queue = [...q];

  for (let i = 0; i < queue.length; ) {
    const oy = queue[i++];
    const ox = queue[i++];

    for (let j = 0; j < 4; j++) {
      const ny = oy + dy[j];
      const nx = ox + dx[j];

      if (nx < 0 || nx > checkArray[0].length - 1 || ny < 0 || ny > checkArray.length - 1) continue;
      if (checkArray[ny][nx] === 1 || checkArray[ny][nx] === 2) continue;

      safeVolume--;
      checkArray[ny][nx] = 2;
      queue.push(ny, nx);
    }
  }

  return safeVolume;
};

// // 3곳의 벽을 세우는 경우의 수
// // return 시점 벽 세워진 check 배열 설정
const dfs = (depth, leftSafe) => {
  if (depth > 3) {
    const newAnswer = bfs(safe.length - 3, check, virus);
    if (newAnswer > answer) {
      answer = newAnswer;
    }
    return;
  }

  if (leftSafe.length === 0) return;

  for (let i = 0; i < leftSafe.length; i++) {
    const newSafe = leftSafe.slice(i + 1);

    check[leftSafe[i][0]][leftSafe[i][1]] = 1;
    dfs(depth + 1, newSafe);
    check[leftSafe[i][0]][leftSafe[i][1]] = 0;
  }
};

dfs(1, safe);

console.log(answer);

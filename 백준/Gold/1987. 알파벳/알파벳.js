const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.trim().split(""));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const visited = Array(26).fill(false);
let answer = 0;

const dfs = (depth, x, y) => {
  answer = answer < depth ? depth : answer;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    // 이동할 좌표가 없을 경우 continue
    if (nx < 0 || nx >= arr[0].length || ny < 0 || ny >= arr.length) continue;
    // 이동한 좌표의 알파벳의 아스키코드가 true면 이미 지나온 블록. continue
    if (visited[arr[ny][nx].charCodeAt() - 65]) continue;

    visited[arr[ny][nx].charCodeAt() - 65] = true;
    dfs(depth + 1, nx, ny);
    visited[arr[ny][nx].charCodeAt() - 65] = false;
  }
};

visited[arr[0][0].charCodeAt() - 65] = true;
dfs(1, 0, 0);

console.log(answer);
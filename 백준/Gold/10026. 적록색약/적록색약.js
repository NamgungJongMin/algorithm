const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr = input.slice(1).map((el) => el.trim().split(""));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let answer = [0, 0];

const q1 = [];
const check1 = Array.from({ length: N }, () => Array(N).fill(0));

for (let i = 0, pointer = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!check1[i][j]) {
      q1.push(i, j);
      check1[i][j] = 1;
    } else continue;

    while (pointer < q1.length) {
      const oy = q1[pointer++];
      const ox = q1[pointer++];

      for (let k = 0; k < 4; k++) {
        const ny = oy + dy[k];
        const nx = ox + dx[k];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
        if (check1[ny][nx]) continue;

        if (arr[ny][nx] === arr[oy][ox]) {
          q1.push(ny, nx);
          check1[ny][nx] = 1;
        }
      }
    }

    answer[0]++;
  }
}

const q2 = [];
const check2 = Array.from({ length: N }, () => Array(N).fill(0));

for (let i = 0, pointer = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!check2[i][j]) {
      q2.push(i, j);
      check2[i][j] = 1;
    } else continue;

    while (pointer < q2.length) {
      const oy = q2[pointer++];
      const ox = q2[pointer++];

      for (let k = 0; k < 4; k++) {
        const ny = oy + dy[k];
        const nx = ox + dx[k];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
        if (check2[ny][nx]) continue;

        if (arr[oy][ox] === "R" || arr[oy][ox] === "G") {
          if (arr[ny][nx] === "R" || arr[ny][nx] === "G") {
            q2.push(ny, nx);
            check2[ny][nx] = 1;
          }
        } else if (arr[ny][nx] === arr[oy][ox]) {
          q2.push(ny, nx);
          check2[ny][nx] = 1;
        }
      }
    }

    answer[1]++;
  }
}

console.log(answer.join(" "));

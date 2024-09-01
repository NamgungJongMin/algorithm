const N = 5;
const arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

arr.forEach((el) => {
  graph[el[0]][el[1]] = 1;
});
console.log(graph);
let answer = 0;

const dfs = (node, check) => {
  if (node === 5) {
    answer++;
    return;
  }

  for (let i = 1; i < graph[0].length; i++) {
    if (check.includes(i)) continue;
    if (graph[node][i] === 0) continue;

    dfs(i, [...check, node]);
  }
};

dfs(1, []);

console.log(answer);

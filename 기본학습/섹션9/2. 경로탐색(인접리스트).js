// 인접리스트
const N = 5;
const input = [
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
const graph = Array.from(Array(N + 1), () => Array(0));

input.forEach((el) => {
  graph[el[0]].push(el[1]);
});

console.log(graph);

let answer = 0;
const dfs = (node, check) => {
  if (node === 5) {
    answer++;
    return;
  }

  for (let i = 0; i < graph[node].length; i++) {
    if (check.includes(graph[node][i])) continue;

    dfs(graph[node][i], [...check, node]);
  }
};

dfs(1, []);

console.log(answer);

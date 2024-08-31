const input = [
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [3, 4],
];
const graph = Array.from(Array(input.length), () => Array(input.length).fill(0));

input.forEach((array) => {
  graph[array[0] - 1][array[1] - 1] = 1;
  graph[array[1] - 1][array[0] - 1] = 1;
});

console.log(graph);

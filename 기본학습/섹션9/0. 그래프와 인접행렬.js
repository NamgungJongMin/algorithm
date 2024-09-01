// // 무방향 그래프
// const N = 5;
// const input = [
//   [1, 2],
//   [1, 3],
//   [2, 4],
//   [2, 5],
//   [3, 4],
// ];
// const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

// input.forEach((array) => {
//   graph[array[0]][array[1]] = 1;
//   graph[array[1]][array[0]] = 1;
// });

// console.log(graph);

// // 방향 그래프
// const N = 5;
// const input = [
//   [1, 2],
//   [1, 3],
//   [3, 4],
//   [4, 2],
//   [2, 5],
// ];
// const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

// input.forEach((array) => {
//   graph[array[0]][array[1]] = 1;
// });

// console.log(graph);

// // 가중치 무방향 그래프
// const N = 5;
// const input1 = [
//   [1, 2, 2],
//   [1, 3, 4],
//   [2, 4, 2],
//   [2, 5, 5],
//   [3, 4, 5],
// ];
// const graph1 = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

// input1.forEach((array) => {
//   graph1[array[0]][array[1]] = array[2];
//   graph1[array[1]][array[0]] = array[2];
// });

// // 가중치 방향 그래프
// const input2 = [
//   [1, 2, 2],
//   [1, 3, 4],
//   [3, 4, 5],
//   [4, 2, 2],
//   [2, 5, 5],
// ];
// const graph2 = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

// input2.forEach((array) => {
//   graph2[array[0]][array[1]] = array[2];
// });

// console.log(graph1);
// console.log(graph2);

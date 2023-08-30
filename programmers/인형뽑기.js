function solution(board, moves) {
  const stack = [];
  const position = [...Array(board.length + 1)].map(() => []);

  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] === 0) continue;

      position[col + 1].unshift(board[row][col]);
    }
  }

  for (let i = 0; i < moves.length; i++) {
    if (!position[moves[i]].length) continue;

    stack.push(position[moves[i]].pop());
  }

  let index = 0;
  let removedCount = 0;

  while (index < stack.length) {
    if (stack[index] === stack[index + 1]) {
      stack.splice(index, 2);
      removedCount++;
      index = index === 0 ? index : index - 1;
    } else {
      index++;
    }
  }

  return removedCount * 2;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));

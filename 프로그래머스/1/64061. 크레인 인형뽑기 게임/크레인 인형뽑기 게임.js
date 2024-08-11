function solution(board, moves) {
  let answer = 0;
  const stack = [];

  moves.forEach((el) => {
    for (let i = 0; i < board.length; i++) {
      const doll = board[i][el - 1];
      if (doll) {
        stack.push(doll);
        board[i][el - 1] = 0;
        break;
      }
    }
    if (stack.length !== 0 && stack.at(-1) === stack.at(-2)) {
      stack.pop();
      stack.pop();
      answer += 2;
    }
  });
  return answer;
}
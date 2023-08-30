function solution(n, info) {
  let answer = [];
  let max = 0;

  const findAnswer = compareArr => {
    for (let i = 10; i >= 0; i--) {
      if (compareArr[i] > answer[i]) return true;
      if (compareArr[i] < answer[i]) return false;
    }
  };

  const dfs = (lionScore, apeachScore, leftArrow, depth, lionArr) => {
    /* ---------------------------------- 재귀 중지 --------------------------------- */
    if (depth > 10) {
      const diff = lionScore - apeachScore;
      const list = [...lionArr];

      list[10] += leftArrow;

      if (diff < 0) return;

      if (diff > max) {
        answer = list;
        max = diff;
      } else if (diff === max) {
        answer = findAnswer(lionArr) ? lionArr : answer;
      }
      return;
    }

    /* ---------------------------------- 재귀 동작 --------------------------------- */
    // 라이언 득점
    if (leftArrow > info[depth]) {
      const newLionArr = [...lionArr];
      newLionArr[depth] = info[depth] + 1;
      dfs(lionScore + 10 - depth, apeachScore, leftArrow - (info[depth] + 1), depth + 1, newLionArr);
    }

    // 라이언 무득점
    if (info[depth] > 0) dfs(lionScore, apeachScore + 10 - depth, leftArrow, depth + 1, [...lionArr]);
    else dfs(lionScore, apeachScore, leftArrow, depth + 1, [...lionArr]);
  };

  dfs(0, 0, n, 0, Array(11).fill(0));

  return answer.length ? answer : [-1];
}

const n = 9;
const info = [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1];
console.log(solution(n, info));

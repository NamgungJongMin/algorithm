function solution(n, info) {
  let answer = [];
  let max = 0;

  const findAnswer = ryunArr => {
    for (let i = 10; i >= 0; i--) {
      if (ryunArr[i] > answer[i]) return true;
      if (ryunArr[i] < answer[i]) return false;
    }
  };

  const dfs = (depth, ryunScore, apeachScore, leftArrow, ryunArr) => {
    /* ------------------------ 재귀 종료 (depth를 전부 순회했을 때) ------------------------ */
    if (depth > 10) {
      const diff = ryunScore - apeachScore;
      const list = [...ryunArr];

      list[10] += leftArrow;

      if (diff < 0) return;

      if (diff > max) {
        answer = list;
        max = diff;
      } else if (diff === max) {
        answer = findAnswer(ryunArr) ? ryunArr : answer;
      }

      return;
    }

    /* ---------------------------- 각 depth마다 실행할 동작 ---------------------------- */
    // 라이언 득점
    if (leftArrow > info[depth]) {
      const newRyunArray = [...ryunArr];
      newRyunArray[depth] = info[depth] + 1;
      dfs(depth + 1, ryunScore + 10 - depth, apeachScore, leftArrow - (info[depth] + 1), newRyunArray);
    }

    // 라이언 무득점 / 어피치 득점
    if (info[depth] > 0) dfs(depth + 1, ryunScore, apeachScore + 10 - depth, leftArrow, [...ryunArr]);
    // 라이언 어피치 둘다 무득점
    else dfs(depth + 1, ryunScore, apeachScore, leftArrow, [...ryunArr]);
  };

  dfs(0, 0, 0, n, Array(11).fill(0));

  return answer.length ? answer : [-1];
}

const n = 9;
const info = [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1];
console.log(solution(n, info));

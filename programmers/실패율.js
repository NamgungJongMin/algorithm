function solution(N, stages) {
  let answer = [];
  const fRate = [...Array(N + 1)];

  for (let i = 1; i <= N; i++) {
    // 남겨진 사람 / 진입한 사람
    let stageLeaved = 0;
    let stageIn = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) stageIn++;
      if (stages[j] === i) stageLeaved++;
    }

    fRate[i] = [i, stageLeaved / stageIn];
  }

  fRate.shift();

  answer = fRate.sort((a, b) => b[1] - a[1]).map(stage => stage[0]);

  return answer;
}

const n = 4;
const stages = [4, 4, 4, 4, 4];
console.log(solution(n, stages));

// result = [3,4,2,1,5]

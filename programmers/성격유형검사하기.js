function solution(survey, choices) {
  // 지표 순으로 테이블 정리
  let table = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i += 1) {
    if (choices[i] <= 3) table[survey[i][0]] += Math.abs(4 - choices[i]);
    else if (choices[i] >= 5) table[survey[i][1]] += Math.abs(4 - choices[i]);
  }

  table = Object.entries(table);
  // console.log(table);

  let result = '';

  for (let i = 0; i < 7; i += 2) {
    if (table[i][1] < table[i + 1][1]) result += table[i + 1][0];
    else result += table[i][0];
  }

  return result;
}

const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];
console.log(solution(survey, choices));

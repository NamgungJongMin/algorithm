// 반례 : k가 남아있는 경우

function solution(number, k) {
  const answer = [];
  const numArr = number.split('');
  let leftCount = k;

  for (let i = 0; i < numArr.length; i++) {
    while (leftCount > 0 && answer.at(-1) < numArr[i]) {
      answer.pop();
      leftCount--;
    }

    answer.push(numArr[i]);
  }
  return answer.splice(0, number.length - k).join('');
}

const number = '21';
const k = 1;
console.log(solution(number, k));

function solution(number, k) {
  let answer = '';
  const numArr = number.split('');
  let leftCount = k;

  const pickTop = arr => {
    const compare = arr.filter((el, index) => index <= leftCount);
    const max = Math.max(...compare);

    answer += max;
    leftCount -= numArr.indexOf(String(max));
    numArr.splice(0, numArr.indexOf(String(max)) + 1);
  };

  while (leftCount > 0) {
    pickTop(numArr);
  }

  if (numArr.length !== 0) {
    answer += numArr.join('');
  }

  return answer;
}

const number = '12';
const k = 1;
console.log(solution(number, k));

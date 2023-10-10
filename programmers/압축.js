function solution(msg) {
  const answer = [];
  const dict = [];
  let stringSum = '';

  dict[0] = null;
  for (let i = 1; i <= 26; i++) {
    dict[i] = String.fromCharCode(64 + i);
  }
  console.log(dict);

  const lastString = msg.split('').reduce((acc, cur) => {
    stringSum = acc + cur;

    if (!dict.includes(stringSum)) {
      dict.push(stringSum);
      answer.push(dict.indexOf(acc));
      return cur;
    }
    return acc + cur;
  });

  answer.push(dict.indexOf(lastString));

  return answer;
}

const msg = 'KAKAO';
console.log(solution(msg));

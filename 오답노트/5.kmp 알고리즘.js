//getPi 함수 => failure 배열을 얻기 위함
// 두 개의 포인터를 이동하고 판단하여 prefix 와 suffix가 같은 최대 부분문자열의 길이를 저장한다.
// 다음 문자열의 pi를 판단할 때에 failure배열에 저장된 이전 인덱스의 값을 활용하여 효율성을 높인다.
const string = "abcabcabc";

const getPi = (string) => {
  const failure = Array(string.length).fill(0);
  let k = 0;

  for (let i = 1; i < string.length; i++) {
    // <string[k] === string[i] => i만 증가> (for문 continue)
    // 다르면 pi[k-1] 에 저장된 인덱스로 k를 이동
    // 더 이상 k가 왼쪽으로 이동할 수 없다면 i만 증가 (for문 continue)
    while (k > 0 && string[k] !== string[i]) {
      k = failure[k - 1];
    }
    // string[k] === string[i] => k,i 둘 다 증가
    if (string[k] === string[i]) {
      failure[i] = k + 1;
      k++;
    }
  }

  return failure;
};

console.log(getPi(string));

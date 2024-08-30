const str = "ABCABCABBD";
const subStr = "ABCABB";
const answerIdx = [];

for (let i = 0; i < str.length; i++) {
  let isMatched = true;

  for (let j = 0; j < subStr.length; j++) {
    if (str[i + j] !== subStr[j]) {
      isMatched = false;
      break;
    }
  }

  if (isMatched) answerIdx.push(i);
}

console.log(answerIdx);

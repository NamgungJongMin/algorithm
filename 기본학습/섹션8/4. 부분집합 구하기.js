function solution(N) {
  const answer = [];
  const arr = Array.from({ length: N }, (_, idx) => idx + 1);

  console.log(arr);

  const recursive = (leftArr, answerArr) => {
    if (leftArr.length === 0) return;

    for (let i = 0; i < leftArr.length; i++) {
      const newArr = [...answerArr, leftArr[i]];
      recursive(leftArr.slice(i + 1), newArr);
      answer.push(newArr);
    }
  };

  recursive(arr, []);
  return answer.map((el) => el.join(" ")).join("\n");
}

const a = 3;
console.log(solution(a));

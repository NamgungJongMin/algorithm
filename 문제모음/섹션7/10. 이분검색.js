function solution(m, arr) {
  const newArr = [...arr].sort((a, b) => a - b);
  let start = 0;
  let end = newArr.length - 1;
  console.log(newArr);

  while (start < end) {
    let cursor = Math.ceil((start + end) / 2);

    if (newArr[cursor] <= m) start = cursor;
    else if (newArr[cursor] > m) end = cursor - 1;
  }

  return start + 1;
}

const arr = [1, 3, 2, 5];
console.log(solution(2, arr));

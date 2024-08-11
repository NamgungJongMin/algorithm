function solution(priorities, location) {
  let answer = 0;
  const arr = priorities.map((el, idx) => [idx, el]);

  while (arr.length) {
    const popProcess = arr.shift();

    if (arr.filter((el) => el[1] > popProcess[1]).length) {
      arr.push(popProcess);
    } else {
      answer++;
      if (popProcess[0] === location) break;
    }
  }

  return answer;
}
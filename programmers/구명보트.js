function solution(people, limit) {
  const peopleArr = [...people];
  let answer = 0;

  peopleArr.sort((a, b) => b - a);

  for (let i = 0, j = peopleArr.length - 1; i <= j; i++) {
    if (peopleArr[i] + peopleArr[j] <= limit) {
      j--;
    }
    answer++;
  }

  return answer;
}

const people = [70, 50, 80, 50];
const limit = 100;

console.log(solution(people, limit));


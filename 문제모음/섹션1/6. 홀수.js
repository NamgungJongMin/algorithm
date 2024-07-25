function solution(arr) {
  const odd = arr.filter((num) => num % 2 === 1);
  const sum = odd.reduce((acc, cur) => acc + cur);
  const min = Math.min(...odd);

  return [sum, min];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

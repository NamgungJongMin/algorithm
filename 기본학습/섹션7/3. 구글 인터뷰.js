function solution(arr) {
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...left, ...right];
}

const a = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(a));

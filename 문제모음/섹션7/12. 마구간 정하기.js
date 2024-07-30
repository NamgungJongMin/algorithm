// NOTE: 가까운 말 거리의 최대값이 mid라는 것에 집중하지 말고 일단 mid보다는 크거나 같게 놓아 볼텐데
// 만약 그 이후 mid 크기라면 그보다 큰게 뒤에, mid보다 크다면 mid가 뒤에 있어야만 한다는 것에 집중.

function count(arr, dist) {
  let cnt = 1;
  let ep = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= dist) {
      cnt++;
      ep = arr[i];
    }
  }

  return cnt;
}

function solution(c, arr) {
  let answer = 1;
  let newArr = [...arr].sort((a, b) => a - b);
  let lt = 1;
  let rt = newArr.at(-1);
  console.log(newArr, "lt: ", lt, "rt: ", rt);

  while (lt < rt) {
    let mid = Math.ceil((lt + rt) / 2);
    if (count(newArr, mid) >= c) {
      answer = mid;
      lt = mid;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

const a = [1, 2, 8, 4, 9];
console.log(solution(3, a));

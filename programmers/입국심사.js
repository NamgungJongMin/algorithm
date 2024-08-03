// NOTE: 저 answer = mid 구문과 <= / >= 부분이 어디에서 같이 위치해야하는지 고민해야됨.

function solution(n, arr) {
  arr.sort((a, b) => a - b);

  let answer = 0;
  let start = 7;
  let end = arr.at(-1) * n;

  while (start <= end) {
    console.log("start", start, "end", end);
    const mid = Math.floor((start + end) / 2);
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      count += Math.floor(mid / arr[i]);
    }

    console.log(start, end, mid, count);

    if (count < n) {
      start = mid + 1;
    } else {
      answer = mid;
      end = mid - 1;
    }
  }

  return answer;
}

const arr = [7, 10];
console.log(solution(6, arr));

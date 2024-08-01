function solution(distance, rocks, n) {
  let arr = [0, ...rocks.sort((a, b) => a - b), distance];
  console.log(rocks);
  let lt = 0;
  let rt = distance;

  while (lt < rt) {
    const mid = Math.ceil((lt + rt) / 2);
    let count = 0;
    let newArr = [...arr];
    console.log(lt, rt, mid);

    for (let i = 1; i < newArr.length; i++) {
      if (newArr[i] - newArr[i - 1] < mid) {
        newArr.splice(i--, 1);
        count++;
      }
    }

    console.log("count", count);

    if (count > n) rt = mid - 1;
    else if (count <= n) lt = mid;
  }

  return lt;
}

const distance = 25;
const rocks = [2, 14, 11, 21, 17];
const n = 2;
console.log(solution(distance, rocks, n));
// expect: 4

function solution(arr) {
  //   let answer = 0;
  //   let n = arr.length;
  //   let dx = [-1, 0, 1, 0];
  //   let dy = [0, 1, 0, -1];
  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //       let flag = 1;
  //       for (let k = 0; k < 4; k++) {
  //         let nx = i + dx[k];
  //         let ny = j + dy[k];
  //         if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
  //           flag = 0;
  //           break;
  //         }
  //       }
  //       if (flag) answer++;
  //     }
  //   }
  //   return answer;
  let answer = 0;
  let x = 1;
  let y = 1;
  let newArr = Array(arr.length + 2).fill(0);
  let maxIndex = newArr.length - 2;

  arr.map((value) => {
    value.push(0);
    value.unshift(0);
  });
  arr.unshift(newArr);
  arr.push(newArr);

  console.log(arr);

  while (1) {
    console.log(x, y);
    if (arr[y][x] > arr[y - 1][x] && arr[y][x] > arr[y][x - 1] && arr[y][x] > arr[y][x + 1] && arr[y][x] > arr[y + 1][x]) {
      console.log("봉우리");
      answer++;
      console.log(x, y, answer);
    }

    if (y < maxIndex) {
      y++;
    } else {
      y = 1;
      x++;
    }

    if (y === maxIndex && x === maxIndex) break;
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

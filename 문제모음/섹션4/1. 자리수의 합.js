// function solution(n, arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = 0,
//       tmp = x;
//     while (tmp) {
//       sum += tmp % 10;
//       tmp = Math.floor(tmp / 10);
//     }
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
//   return answer;
// }

// function solution(n, arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = x
//       .toString()
//       .split("")
//       .reduce((a, b) => a + Number(b), 0);
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
//   return answer;
// }

// function solution(n, arr) {
//   let answerArr = [];
//   let indexArr = [];

//   arr.map((value, index) => {
//     answerArr[index] = String(value).split("");
//   });

//   answerArr.map((value, index) => {
//     let sum = 0;
//     value.map((el) => {
//       sum += Number(el);
//     });
//     answerArr[index] = sum;
//   });

//   answerArr.map((value, index) => {
//     if (value === Math.max(...answerArr)) {
//       indexArr.push(index);
//     }
//   });

//   return arr[Math.max(...indexArr)];
// }

function solution(n, arr) {
  const addNumber = (number) =>
    String(number)
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);

  return arr.reduce((acc, cur) => {
    if (addNumber(cur) > addNumber(acc)) return cur;
    if (addNumber(cur) === addNumber(acc)) return cur >= acc ? cur : acc;
    return acc;
  }, 0);
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

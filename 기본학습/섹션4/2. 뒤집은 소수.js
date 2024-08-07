// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     let res = 0;
//     while (x) {
//       let t = x % 10;
//       res = res * 10 + t;
//       x = parseInt(x / 10);
//     }
//     if (isPrime(res)) answer.push(res);
//   }
//   return answer;
// }

// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     let res = Number(x.toString().split("").reverse().join(""));
//     if (isPrime(res)) answer.push(res);
//   }
//   return answer;
// }

// function solution(arr) {
//   let answer = [];

//   arr.map((value, index) => {
//     arr[index] = Number(String(value).split("").reverse().join(""));
//   });

//   arr.map((value) => {
//     let isPrime = true;

//     for (let i = 2; i < value; i++) {
//       if (value % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime && value !== 1) {
//       answer.push(value);
//     }
//   });

//   return answer;
// }

function solution(arr) {
  const answer = [];

  arr.map((number) => {
    const changedNumber = Number(String(number).split("").reverse().join(""));

    if (changedNumber === 1) return;

    for (let i = 2; i < changedNumber - 1; i++) {
      if (changedNumber % i === 0) return;
    }

    answer.push(changedNumber);
  });

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

// 첫 시도 투포인터

function solution(queue1, queue2) {
  const answer = 599999;
  const sight1 = queue1.concat(queue2);
  const sight2 = queue2.concat(queue1);
  const target = sight1.reduce((acc, cur) => acc + cur);
  const ps = 0;
  const pe = 0;

  // while (ps < sight1.length) {
  //   let sum = 0;
  //   let count = pe >= queue1.length ? ps+pe-

  //   for (let i = ps; i <= pe; i++){
  //     sum += sight1[i]
  //   }

  //   if(sum === target) answer =
  // }

  // return answer;
}

const queue1 = [3, 2, 7, 2];
const queue2 = [4, 6, 5, 1];
console.log(solution(queue1, queue2));

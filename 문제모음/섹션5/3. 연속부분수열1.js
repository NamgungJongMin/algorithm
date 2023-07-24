// NOTE: 예시 답안의 반복문의 중첩이 시간복잡도가 O(n)인 이유?
// for문 안에 while문을 보고 처음에 이중for문과 같이 n^2의 시간 복잡도를 가지고 있는 것이 아닌가 하는 생각이 들었다.
// NOTE: 반복문의 시간복잡도는 몇번 겹쳐있나를 넘어서 중첩된 안쪽 반복문이 몇번 호출되는지를 봐야함.
// 이번 문제의 경우 while문이 매 for문마다 불러와 지는 것이 아니라 for문이 도는 도중 sum이 m을 넘었을때만 호출이 되어지기 때문에
// O(n)의 시간 복잡도를 가지게 된다.
function solution(m, arr) {
  //   let answer = 0,
  //     lt = 0,
  //     sum = 0;
  //   for (let rt = 0; rt < arr.length; rt++) {
  //     sum += arr[rt];
  //     if (sum === m) answer++;
  //     while (sum >= m) {
  //       sum -= arr[lt++];
  //       if (sum === m) answer++;
  //     }
  //   }
  //   return answer;

  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum === m) {
      console.log("하나", i);
      answer++;
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === m) {
        console.log(i, j);
        answer++;
        sum = 0;
        break;
      }
      if (sum > m) {
        sum = 0;
        break;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let count = 0;

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        count++;
      }

      if (prices[i] > prices[j]) {
        count++;
        break;
      }
    }

    answer.push(count);
  }

  return answer;
}

const prices = [1, 2, 3, 2, 3];
console.log(solution(prices));

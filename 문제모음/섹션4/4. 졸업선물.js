function solution(m, product) {
  //   let answer = 0;
  //   let n = product.length;
  //   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  //   for (let i = 0; i < n; i++) {
  //     let money = m - (product[i][0] / 2 + product[i][1]);
  //     let cnt = 1;
  //     for (let j = 0; j < n; j++) {
  //       if (j !== i && product[j][0] + product[j][1] > money) break;
  //       if (j !== i && product[j][0] + product[j][1] <= money) {
  //         money -= product[j][0] + product[j][1];
  //         cnt++;
  //       }
  //     }
  //     answer = Math.max(answer, cnt);
  //   }
  //   return answer;

  let answer = [];

  for (let i = 0; i < product.length; i++) {
    let prices = [];
    let priceSum = 0;
    let num = 0;

    for (let j = 0; j < product.length; j++) {
      if (i === j) prices.push(product[j][0] / 2 + product[j][1]);
      else prices.push(product[j][0] + product[j][1]);
    }

    prices.sort((a, b) => {
      return a - b;
    });

    for (let k = 0; k < prices.length; k++) {
      if (priceSum + prices[k] > m) break;
      else {
        priceSum += prices[k];
        num++;
      }
    }

    answer.push(num);
  }
  return Math.max(...answer);
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

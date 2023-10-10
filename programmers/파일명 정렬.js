function solution(files) {
  const answer = [];

  const array = files.map((el, index) => {
    const head = el.match(/^\D+/)[0].toUpperCase();
    const num = el.match(/\d+/)[0];
    const i = index;

    return [head, num, i];
  });

  array.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;

    return a[1] - b[1];
  });

  for (let i = 0; i < array.length; i++) {
    answer[i] = files[array[i][2]];
  }

  return answer;
}

const files = ['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG'];
console.log(solution(files));

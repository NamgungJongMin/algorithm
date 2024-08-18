const n = 6;
const arr = [1, 3, 5, 6, 7, 10];

let answer = "NO";
let arr1 = [];
let arr2 = [];

const recursive = (leftArr, picks) => {
  if (leftArr.length === 0) return;

  for (let i = 0; i < leftArr.length; i++) {
    const newArr = [...picks, leftArr[i]];
    recursive(leftArr.slice(i + 1), newArr);
    arr1.push(newArr);
    arr2.push(arr.filter((el) => !newArr.includes(el)));
  }
};

recursive(arr, []);

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i].reduce((acc, cur) => acc + cur, 0) === arr2[i].reduce((acc, cur) => acc + cur, 0)) answer = "YES";
}

console.log(answer);

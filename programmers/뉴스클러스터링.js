function solution(str1, str2) {
  const stringSet1 = [];
  const stringSet2 = [];
  let intersect = 0;
  const reg = /^[a-zA-Z]*$/g;

  for (let i = 0; i < str1.length - 1; i++) {
    stringSet1.push(...(str1[i] + str1[i + 1]).toUpperCase().match(reg));
    stringSet2.push(...(str2[i] + str2[i + 1]).toUpperCase().match(reg));

    if (stringSet1.at(-1).length < 2) stringSet1.pop();
    if (stringSet2.at(-1).length < 2) stringSet2.pop();
  }

  for (let i = 0; i < stringSet1.length; i++) {
    if (stringSet2.includes(stringSet1[i])) intersect++;
  }
  
  return parseInt((intersect / (stringSet1.length + stringSet2.length - intersect)) * 65536);
}

const str1 = 'FRANCE';
const str2 = 'french';
console.log(solution(str1, str2));

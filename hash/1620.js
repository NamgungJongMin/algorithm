const fs = require("fs");
const input = fs
  .readFileSync("./1620.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replaceAll("\r", ""));

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

const pokemons = input.splice(0, N);
const questions = input;

let map = new Map();

pokemons.map((pokemon, index) => {
  map.set(pokemon.replace(/\r/g, ""), index + 1);
});

questions.map((question) => {
  if (isNaN(question)) console.log(map.get(question));
  else console.log(pokemons[Number(question) - 1]);
});

/* ----------------------------------- --- ---------------------------------- */

// const fs = require("fs");
// let input = fs
//   .readFileSync("./1620.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((item) => item.replaceAll("\r", ""));
// // N: 입력 갯수, M: 맞혀야 하는 갯수
// const [N, M] = input[0].split(" ").map((item) => +item);

// // 포켓몬의 이름이 담긴 배열과 맞혀야 하는 값이 담긴 배열 생성
// const pokemon = input.slice(1, N + 1);
// const quest = input.slice(-M);

// // 포켓몬의 이름이 담긴 객체 생성
// const pokemonObj = new Map(pokemon.map((v, i) => [v, i + 1]));
// console.log(pokemonObj);
// // 맞혀야 하는 개수만큼 반복
// for (let i = 0; i < quest.length; i++) {
//   if (isNaN(+quest[i])) console.log(pokemonObj.get(quest[i]));
//   else console.log(pokemon[+quest[i] - 1]);
// }

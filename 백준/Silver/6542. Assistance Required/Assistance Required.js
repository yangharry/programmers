let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((e) => (e = +e));
let luckys = {};

function solution(input) {
  let lucky = {};
  for (let i = 0; i < 33808; i++) {
    lucky[i] = i + 2;
  }
  luckys[1] = 2;
  for (let i = 1; i < input; i++) {
    let keys = Object.keys(lucky);
    let plusValue = lucky[keys[0]];
    for (let j = 0; j < keys.length; j += plusValue) {
      delete lucky[keys[j]];
    }
    luckys[i + 1] = lucky[Object.keys(lucky)[0]];
  }
}
solution(Math.max(...input));
let answer = [];
for (let i = 0; i < input.length - 1; i++) {
  answer.push(luckys[input[i]]);
}

console.log(answer.join('\n'));

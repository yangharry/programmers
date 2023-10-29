const [...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

function solution(input) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
  };

  for (let e of input) {
    if (e === '(' || e === '[') {
      stack.push(e);
    } else if (e === ')' || e === ']') {
      let last = stack.pop();
      if (map[last] !== e) {
        return 'no';
      }
    }
  }

  return stack.length === 0 ? 'yes' : 'no';
}

let answer = [];
for (let i = 0; i < input.length - 2; i++) {
  answer.push(solution(input[i]));
}
console.log(answer.join('\n'));

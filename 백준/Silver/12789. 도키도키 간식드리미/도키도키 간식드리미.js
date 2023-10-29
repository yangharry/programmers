let [n, input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

input = input.split(' ').map((e) => (e = Number(e)));

function solution(input) {
  let stack = [];
  let i = 1;
  let index = 0;
  while (index < input.length) {
    if (input[index] == i) {
      index++;
      i++;
    } else if (stack.length > 0 && stack[stack.length - 1] == i) {
      stack.pop();
      i++;
    } else {
      stack.push(input[index]);
      index++;
    }
  }

  while (stack.length > 0) {
    if (stack.pop() != i) {
      return 'Sad';
    }
    i++;
  }
  return 'Nice';
}

console.log(solution(input));

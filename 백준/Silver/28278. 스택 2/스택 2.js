const [n, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let stack = [];
let answer = [];
for (let i = 0; i < n; i++) {
  const [a, b] = input[i].split(' ');

  if (a == 1) {
    stack.push(b);
  } else if (a == 2) {
    if (stack[0]) {
      answer.push(stack.pop());
    } else {
      answer.push(-1);
    }
  } else if (a == 3) {
    answer.push(stack.length);
  } else if (a == 4) {
    if (stack[0]) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  } else if (a == 5) {
    if (stack[0]) {
      answer.push(stack[stack.length - 1]);
    } else {
      answer.push(-1);
    }
  }
}

process.stdout.write(answer.join('\n'));

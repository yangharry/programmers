let [n, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let stack = [];
let answer = [];
let index = 0;

for (let i = 0; i < n; i++) {
  let [a, b] = input[i].split(' ');
  switch (a) {
    case 'push':
      stack.push(b);
      break;
    case 'pop':
      if (index < stack.length) {
        answer.push(stack[index]);
        index++;
      } else {
        answer.push('-1');
      }
      break;
    case 'size':
      answer.push(String(stack.length - index));
      break;
    case 'empty':
      answer.push(stack.length == index ? '1' : '0');
      break;
    case 'front':
      answer.push(stack.length > index ? stack[index] : '-1');
      break;
    case 'back':
      answer.push(stack.length > index ? stack[stack.length - 1] : '-1');
      break;
  }
}

console.log(answer.join('\n'));

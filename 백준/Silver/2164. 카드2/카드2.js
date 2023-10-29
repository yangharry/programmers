let n = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .trim()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let stack = [];
let index = 0;
for (let i = 1; i <= +n; i++) {
  stack.push(i);
}

while (stack.length - index > 1) {
  index++;
  stack.push(stack[index++]);
}

console.log(stack[index]);

let [n, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let front = [];
let back = [];
let answer = [];
let frontIndex = 0;
let backIndex = 0;
for (let i = 0; i < n; i++) {
  let [a, b] = input[i].split(' ');
  switch (a) {
    case '1':
      front.push(b);
      break;
    case '2':
      back.push(b);
      break;
    case '3':
      if (front.length - frontIndex > 0) {
        answer.push(front.pop());
      } else if (back.length - backIndex > 0) {
        answer.push(back[backIndex]);
        backIndex++;
      } else {
        answer.push('-1');
      }
      break;
    case '4':
      if (back.length - backIndex > 0) {
        answer.push(back.pop());
      } else if (front.length - frontIndex > 0) {
        answer.push(front[frontIndex]);
        frontIndex++;
      } else {
        answer.push('-1');
      }
      break;
    case '5':
      answer.push(String(front.length + back.length - frontIndex - backIndex));
      break;
    case '6':
      if (front.length + back.length - frontIndex - backIndex > 0) {
        answer.push('0');
      } else {
        answer.push('1');
      }
      break;
    case '7':
      if (front.length - frontIndex > 0) {
        answer.push(front[front.length - 1]);
      } else if (back.length - backIndex > 0) {
        answer.push(back[backIndex]);
      } else {
        answer.push(-'1');
      }
      break;
    case '8':
      if (back.length - backIndex > 0) {
        answer.push(back[back.length - 1]);
      } else if (front.length - frontIndex > 0) {
        answer.push(front[frontIndex]);
      } else {
        answer.push('-1');
      }
      break;
  }
}

console.log(answer.join('\n'));

const [n, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let answer = [];
for (let i = 0; i < n; i++) {
  let a = Number(input[i]);
  if (a == 0) {
    answer.pop();
  } else {
    answer.push(a);
  }
}

console.log(
  answer.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
);

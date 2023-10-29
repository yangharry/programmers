const [n, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n')
  .map((e) => (e = +e));

let answer = [];
for (let i = 0; i < n; i++) {
  let a = input[i];
  if (a == '0') {
    answer.pop();
  } else {
    answer.push(a);
  }
}

if (answer[0]) {
  console.log(
    answer.reduce((acc, cur) => {
      return (acc = acc + cur);
    })
  );
} else {
  console.log(0);
}

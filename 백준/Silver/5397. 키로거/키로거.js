const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
function solution(str) {
  let text = [];
  let textTail = [];
  str.forEach((e) => {
    if (e == '<') {
      if (text.length != 0) {
        textTail.push(text.pop());
      }
    } else if (e == '>') {
      if (textTail.length != 0) {
        text.push(textTail.pop());
      }
    } else if (e == '-') {
      if (text.length != 0) {
        text.pop();
      }
    } else {
      text.push(e);
    }
  });
  console.log(text.join('') + textTail.reverse().join(''));
}

for (let i = 1; i < input.length; i++) {
  solution(input[i].split(''));
}

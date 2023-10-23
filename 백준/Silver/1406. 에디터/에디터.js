const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let text = input[0].split('');
let textTail = [];
for (let i = 2; i < input.length; i++) {
  let [command, value] = input[i].split(' ');
  if (command == 'L' && text.length != 0) {
    textTail.push(text.pop());
  } else if (command == 'D' && textTail.length != 0) {
    text.push(textTail.pop());
  } else if (command == 'B' && text.length != 0) {
    text.pop();
  } else if (command == 'P') {
    text.push(value);
  }
}

let answer = text.join('') + textTail.reverse().join('');

console.log(answer);

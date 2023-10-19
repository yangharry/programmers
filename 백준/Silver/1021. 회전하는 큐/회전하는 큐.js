const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = +input[0].split(' ')[0];
let m = +input[0].split(' ')[1];
let arr = input[1].split(' ');
arr = arr.map((e) => Number(e));

function solution(n, m, arr) {
  let answer = 0;
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  let center = 0;
  for (let i = 0; i < m; i++) {
    let index = array.indexOf(arr[i]);
    if (Math.abs(index - center) <= array.length - Math.abs(center - index)) {
      answer += Math.abs(index - center);
      if (array.length - 1 == index) {
        center = 0;
      } else {
        center = index;
      }
      array.splice(index, 1);
    } else {
      answer += array.length - Math.abs(center - index);
      if (array.length - 1 == index) {
        center = 0;
      } else {
        center = index;
      }
      array.splice(index, 1);
    }
  }

  return answer;
}

console.log(solution(n, m, arr));

let [N, A, B, M, C] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

A = A.split(' ');
B = B.split(' ');
C = C.split(' ');

let A0 = A.join('').replaceAll('0', '').length;
let D = [];
let j = N - 1;
let k = 0;
while (D.length < M) {
  if (A[j] == '0') {
    D.push(B[j]);
  }
  if (j >= 0) {
    j--;
  }
  if (j < 0) {
    D.push(C[k]);
    k++;
  }
}

let answer = [];

for (let i = 0; i < M; i++) {
  if (N - A0 == 0) {
    answer.push(C[i]);
  } else {
    answer.push(D[i]);
  }
}

console.log(answer.join(' '));

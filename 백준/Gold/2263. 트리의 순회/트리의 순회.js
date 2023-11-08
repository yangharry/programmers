let [n, inorderInput, postorderInput] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

inorderInput = inorderInput.split(' ');
postorderInput = postorderInput.split(' ');

function solution(n, inOrder, postOrder) {
  const preorder = [];
  const inOderIndex = Array(n + 1);
  const stack = [[0, n - 1, 0, n - 1]];

  inOrder.forEach((node, index) => {
    inOderIndex[node] = index;
  });

  while (stack.length > 0) {
    const [inStart, inEnd, postStart, postEnd] = stack.pop();

    const index = inOderIndex[postOrder[postEnd]];
    preorder[preorder.length] = inOrder[index];

    const leftCnt = index - inStart;
    const rightCnt = inEnd - index;

    if (rightCnt > 0) {
      stack[stack.length] = [index + 1, inEnd, postStart + leftCnt, postEnd - 1];
    }

    if (leftCnt > 0) {
      stack[stack.length] = [inStart, index - 1, postStart, postStart + leftCnt - 1];
    }
  }

  return preorder.join(' ');
}

const ans = solution(n, inorderInput, postorderInput);
console.log(ans);

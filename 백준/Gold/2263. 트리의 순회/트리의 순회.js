let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

(function solution(input) {
  const n = +input[0];
  const [inorder, postorder] = input.slice(1).map((order) => order.split(' '));
  const result = [];

  const inorderIdx = new Array(n + 1);
  inorder.forEach((node, idx) => (inorderIdx[node] = idx));

  preorder(0, n - 1, 0, n - 1);

  console.log(result.join(' '));

  function preorder(inStart, inEnd, postStart, postEnd) {
    if (inStart > inEnd || postStart > postEnd) return;
    const root = postorder[postEnd];
    const rootIdx = inorderIdx[root];
    const left = rootIdx - inStart;
    result.push(root);

    preorder(inStart, rootIdx - 1, postStart, postStart + left - 1);
    preorder(rootIdx + 1, inEnd, postStart + left, postEnd - 1);
  }
})(input);

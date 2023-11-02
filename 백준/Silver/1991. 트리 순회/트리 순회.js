let [n, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

n = Number(n);

const tree = {};

// 이진 트리 구성
inputs.forEach((input) => {
  const [nodeLetter, left, right] = input.split(' ');
  tree[nodeLetter] = { left: left === '.' ? null : left, right: right === '.' ? null : right };
});

// 전위 순회
function preorder(input) {
  if (!input) return '';
  return input + preorder(tree[input].left) + preorder(tree[input].right);
}

// 중위 순회
function inorder(input) {
  if (!input) return '';
  return inorder(tree[input].left) + input + inorder(tree[input].right);
}

// 후위 순회
function postorder(input) {
  if (!input) return '';
  return postorder(tree[input].left) + postorder(tree[input].right) + input;
}

console.log(preorder('A'));
console.log(inorder('A'));
console.log(postorder('A'));

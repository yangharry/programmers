let [n, k, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .trim()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

n = Number(n);
k = Number(k);
inputs = inputs.map(Number);

function findAllCombinations(cards, k) {
  let results = new Set();

  function combine(combination, remainingCards) {
    if (combination.length === k) {
      results.add(combination.join(''));
      return;
    }

    for (let i = 0; i < remainingCards.length; i++) {
      const next = [...combination, remainingCards[i]];
      const remaining = [...remainingCards.slice(0, i), ...remainingCards.slice(i + 1)];
      combine(next, remaining);
    }
  }

  combine([], cards);
  return results;
}

function countUniqueIntegers(n, k, cardNumbers) {
  let combinations = findAllCombinations(cardNumbers, k);
  return combinations.size;
}

console.log(countUniqueIntegers(n, k, inputs));

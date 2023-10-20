const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = +input[0];
let k = +input[1];
let location = [];
let direction = [];
for (let i = 2; i < k + 2; i++) {
  location.push(input[i].split(' ').map((e) => +e));
}
let l = +input[k + 2];
for (let i = k + 3; i < l + k + 3; i++) {
  direction.push(input[i].split(' ').map((e) => (isNaN(e) ? e : +e)));
}

function solution(n, k, appleLocation, l, wormDirection) {
  let answer = 0;
  let location = [1, 1];
  let worm = [];
  let direction = 'E';
  while (true) {
    if (direction == 'E') {
      location[1]++;
      answer++;
    } else if (direction == 'W') {
      location[1]--;
      answer++;
    } else if (direction == 'N') {
      location[0]--;
      answer++;
    } else if (direction == 'S') {
      location[0]++;
      answer++;
    }
      
    if (
      location.includes(0) ||
      location.includes(n + 1) ||
      worm.some((arr) => JSON.stringify(arr) == JSON.stringify(location))
    ) {
      return answer;
    }

    let index = appleLocation.findIndex((arr) => JSON.stringify(arr) == JSON.stringify(location));
    if (index != -1) {
      if (direction == 'E') {
        worm.unshift([location[0], location[1] - 1]);
      } else if (direction == 'W') {
        worm.unshift([location[0], location[1] + 1]);
      } else if (direction == 'N') {
        worm.unshift([location[0] + 1, location[1]]);
      } else if (direction == 'S') {
        worm.unshift([location[0] - 1, location[1]]);
      }
      appleLocation.splice(index, 1);
    } else {
      if (direction == 'E') {
        worm.unshift([location[0], location[1] - 1]);
      } else if (direction == 'W') {
        worm.unshift([location[0], location[1] + 1]);
      } else if (direction == 'N') {
        worm.unshift([location[0] + 1, location[1]]);
      } else if (direction == 'S') {
        worm.unshift([location[0] - 1, location[1]]);
      }
      worm.pop();
    }
    if (wormDirection.length != 0 && answer == wormDirection[0][0]) {
      if ((wormDirection[0][1] == 'D' && direction == 'E') || (wormDirection[0][1] == 'L' && direction == 'W')) {
        direction = 'S';
      } else if ((wormDirection[0][1] == 'D' && direction == 'W') || (wormDirection[0][1] == 'L' && direction == 'E')) {
        direction = 'N';
      } else if ((wormDirection[0][1] == 'D' && direction == 'N') || (wormDirection[0][1] == 'L' && direction == 'S')) {
        direction = 'E';
      } else {
        direction = 'W';
      }
      wormDirection.splice(0, 1);
    }
  }
}

console.log(solution(n, k, location, l, direction));

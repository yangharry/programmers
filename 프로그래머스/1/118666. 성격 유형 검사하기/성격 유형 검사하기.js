function solution(survey, choices) {
  var answer = '';
  let a = { r: 0, t: 0, c: 0, f: 0, j: 0, m: 0, a: 0, n: 0 };
  let f = { 1: 3, 2: 2, 3: 1, 5: 1, 6: 2, 7: 3 };
  for (let i = 0; i < survey.length; i++) {
    let [c, d] = survey[i].split('');
    let e = choices[i];
    let plus = 0;
    let select = '';
    if (e < 4) {
      plus = f[e];
      select = c;
    } else if (e > 4) {
      plus = f[e];
      select = d;
    } else if (e == 4) {
      plus = 0;
    }
    if (select == 'R') {
      a['r'] += plus;
    } else if (select == 'T') {
      a['t'] += plus;
    } else if (select == 'C') {
      a['c'] += plus;
    } else if (select == 'F') {
      a['f'] += plus;
    } else if (select == 'J') {
      a['j'] += plus;
    } else if (select == 'M') {
      a['m'] += plus;
    } else if (select == 'A') {
      a['a'] += plus;
    } else if (select == 'N') {
      a['n'] += plus;
    }
  }

  if (a.r < a.t) {
    answer += 'T';
  } else {
    answer += 'R';
  }
  if (a.c < a.f) {
    answer += 'F';
  } else {
    answer += 'C';
  }
  if (a.j < a.m) {
    answer += 'M';
  } else {
    answer += 'J';
  }
  if (a.a < a.n) {
    answer += 'N';
  } else {
    answer += 'A';
  }


  return answer;
}
function solution(s) {
    var answer = '';
    answer = s.split('').sort().reverse().join('')
    return answer;
}
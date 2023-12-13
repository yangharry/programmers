function solution(n) {
    let tritDigit = n.toString(3)
    let number = tritDigit.split('').reverse().join('');
    return parseInt(number,3)
}
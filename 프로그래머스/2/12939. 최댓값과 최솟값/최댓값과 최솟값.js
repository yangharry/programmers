function solution(s) {
    var answer = '';
    let a = s.split(" ")
    answer = Math.min(...a) + " " + Math.max(...a)
    return answer;
}
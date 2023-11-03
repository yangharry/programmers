function solution(my_string, n) {
    var answer = '';
    for(let a of my_string){
        answer += a.repeat(n)
    }
    return answer;
}
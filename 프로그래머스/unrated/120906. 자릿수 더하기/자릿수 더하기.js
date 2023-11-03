function solution(n) {
    var answer = 0;
    let number = String(n).split('')
    number.map(e=>{
        answer += Number(e)
    })
    return answer;
}
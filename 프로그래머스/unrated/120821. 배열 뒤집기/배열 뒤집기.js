function solution(num_list) {
    var answer = [];
    num_list.map(e=>{
        answer.unshift(e)
    })
    return answer;
}
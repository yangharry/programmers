function solution(array, n) {
    var answer = 0;
    array.map((e)=>{
        if(e == n){
            answer ++
        }
    })
    return answer;
}
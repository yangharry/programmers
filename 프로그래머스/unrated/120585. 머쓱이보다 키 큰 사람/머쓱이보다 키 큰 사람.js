function solution(array, height) {
    var answer = 0;
    array.map((e)=>{
        if(e > height){
            answer ++
        }
    })
    return answer;
}
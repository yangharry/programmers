function solution(my_string) {
    var answer = 0;
    for(let i = 0 ; i < my_string.length; i++){
        if(my_string[i] < 10){
            answer += Number(my_string[i]) 
        }
    }
    return answer
}
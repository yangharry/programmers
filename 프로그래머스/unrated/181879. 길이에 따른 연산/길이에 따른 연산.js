function solution(num_list) {
    var answer = 1;
    for(let i = 0; i < num_list.length; i++){
    if(num_list.length > 10){
        answer = answer + num_list[i]
    } else {
        answer = answer*num_list[i] 
    }
    }

    return num_list.length > 10 ? answer - 1 : answer
}
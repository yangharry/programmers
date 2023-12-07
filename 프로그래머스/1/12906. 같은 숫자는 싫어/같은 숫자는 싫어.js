function solution(arr)
{
    let answer = []
    for(let i = 0; i < arr.length; i++ ){
        let l = answer.length;
        if(answer[l-1] != arr[i]){
            answer.push(arr[i])
        }
    }
    return answer
}
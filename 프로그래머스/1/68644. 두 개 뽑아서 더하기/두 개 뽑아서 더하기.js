function solution(numbers) {
    var answer = [];
    let visited = Array(numbers.length).fill(false);
    function aaa(startIndex){
        if(!visited[startIndex]){
            visited[startIndex] = true
            let result = []
            result.push(numbers[startIndex])
            for(let i = 0; i < numbers.length; i++){
                if(!visited[i]){
                    result.push(numbers[i])
                    answer.push(result[0]+result[1])
                    result.pop()
                }
            }
        }
    }
    for(let i = 0; i < numbers.length; i++){
        aaa(i)
    }
    return [...new Set(answer)].sort((a,b)=>a-b);
}
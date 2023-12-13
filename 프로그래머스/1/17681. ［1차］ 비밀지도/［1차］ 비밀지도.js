function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i ++){
        let binary1 = arr1[i].toString(2);
        let binary2 = arr2[i].toString(2);
        if(binary1.length < n){
            binary1 = [...Array(n - binary1.length).fill(0),binary1].join('')
        }
                if(binary2.length < n){
            binary2 = [...Array(n - binary2.length).fill(0),binary2].join('')
        }
        let result = ''
        for(let j = 0 ; j < n; j ++){
            if(binary1[j] == "1" || binary2[j] == "1"){
                result += '#'
            } else {
                result += ' '
            }
        }
        answer.push(result)
        
    }
    return answer;
}
function solution(s, n) {
    var answer = '';
    for(let e of s){
        if(e !== " "){
            let number = e.charCodeAt(0)
            for(let i = 0; i < n; i++){
                if(number === 90 || number === 122){
                    number -= 25
                } else {
                    number ++
                }
            }
            answer += String.fromCharCode(number)
        } else {
            answer += e
        }
    }
    return answer;
}
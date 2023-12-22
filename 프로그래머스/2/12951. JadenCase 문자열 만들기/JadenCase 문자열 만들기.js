function solution(s) {
    var answer = [];
    let arr = s.split(' ')
    arr.map((e1)=>{
        let result = ''
        e1.split('').map((e2,i)=>{
            if(i === 0){
                result += e2.toUpperCase()
            } else {
                result += e2.toLowerCase()
            }
        })
        answer.push(result)
    }
    )
    return answer.join(' ');
}
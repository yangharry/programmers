function solution(s) {
    var answer = '';
    let wordArray = s.split('')
    let length = wordArray.length
    if(length % 2 == 0){
        answer = wordArray.splice(Math.floor(length/2) -1,2).join('')
    } else {
        answer = wordArray.splice(Math.floor(length/2),1).join('')
    }
    return answer;
}
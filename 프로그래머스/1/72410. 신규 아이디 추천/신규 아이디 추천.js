function solution(new_id) {
    let answer = new_id
    .toLowerCase()
    .replace(/[^-_.a-z0-9]/g,'')
    .replace(/\.{2,}/g,'.')
    .replace(/^\.|\.$/g,'')
    .replace(/^$/,'a') // if(!answer) answer = 'a'
    .substring(0,15)
    .replace(/\.$/, '')
    while(answer.length < 3) answer += answer[answer.length -1]

    return answer;
}
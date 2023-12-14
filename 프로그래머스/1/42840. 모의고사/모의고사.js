function solution(answers) {
    var answer = [];
    let points = [0,0,0];
    let human1 = [1, 2, 3, 4, 5];
    let human2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let human3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for(let i = 0; i < answers.length; i ++){
        if(human1[i % 5] == answers[i]){
            points[0] ++;
        }
        if(human2[i % 8] == answers[i]){
            points[1] ++;
        }
        if(human3[i % 10] == answers[i]){
            points[2] ++;
        }
    }
    points.map((e,i)=>{
        let max = Math.max(...points)
        if(e == max){
           answer.push(i+1)
        }
    })
    return answer;
}


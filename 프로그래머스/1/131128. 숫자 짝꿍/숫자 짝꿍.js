function solution(X, Y) {
    var answer = '';
    let commonNum = []
    let objectX = X.split('').reduce((acc,cur)=>{
        return (acc[cur] = (acc[cur] || 0) + 1), acc
    },{})
    let objectY = Y.split('').reduce((acc,cur)=>{
        return (acc[cur] = (acc[cur] || 0) + 1), acc
    },{})
    
    let objectXkeys = Object.keys(objectX)
    let objectYkeys = Object.keys(objectY)
    
    objectXkeys.forEach((e)=>{
        if(objectYkeys.indexOf(e) != -1){
            let length = objectX[e] < objectY[e] ? objectX[e] : objectY[e]  
            for(let i = 0; i < length; i++){
                commonNum.push(e)                
            }
        }
    })
    commonNum.sort((a,b)=>(a < b ? 1 : -1))
    if(commonNum.length == 0){
        answer = "-1"
    } else if(Number(commonNum.join(''))==0){
        answer = "0"
    } else {
        answer = commonNum.join('')
    }
    return answer;
}
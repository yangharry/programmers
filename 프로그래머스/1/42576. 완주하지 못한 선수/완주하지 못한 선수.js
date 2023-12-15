function solution(participant, completion) {
    let map = {}
    participant.map((e)=>{
        if(!map[e]){
             map[e]  = 1
        } else {
            map[e] ++
        }
    })
    
    completion.map((e)=>{
        map[e] --
    })
    
    let keys = Object.keys(map)

    return keys.find((e)=> map[e] === 1);
}
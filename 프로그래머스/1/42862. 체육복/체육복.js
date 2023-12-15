function solution(n, lost, reserve) {
    lost.sort((a,b)=> a -b)
    reserve.sort((a,b)=> a-b)
    let realLost = lost.filter(e => !reserve.includes(e))
    let realReserve = reserve.filter(e => !lost.includes(e))

    let answer = n - realLost.length;
    
    realLost.forEach(lostStudent => {
        let found = realReserve.find(reserveStudent => Math.abs(reserveStudent - lostStudent) === 1);
        if(found !== undefined){
            answer++
            realReserve = realReserve.filter(e => e !== found);
        }
    })
    
    return answer;
    
}
function solution(numbers, hand) {
    var answer = '';
    let keyPad = ['1','2','3','4','5','6','7','8','9','*','0','#']
    let coordinate = {}
    let leftLocation = [4,1]
    let rightLocation = [4,3]
    keyPad.map((e,i)=>{
        let y = Math.floor(i/3)+1;
        coordinate[e] = [y, i % 3 + 1]
    })
    numbers.map((e,i)=>{
        if(e == 1 || e == 4|| e == 7){
            answer += 'L'
            leftLocation = coordinate[e]
        } else if (e == 3 || e == 6 || e == 9){
            answer += 'R'
            rightLocation = coordinate[e]
        } else {
            let [ly,lx] = leftLocation 
            let [ry,rx] = rightLocation
            let [ty,tx] = coordinate[e]
            let ld = Math.abs(ty-ly) + Math.abs(tx-lx);
            let rd = Math.abs(ty-ry) + Math.abs(tx-rx);
            if(ld == rd){
                if(hand == "right"){
                    answer += 'R'
                    rightLocation = coordinate[e]
                } else {
                    answer += 'L'
                    leftLocation = coordinate[e]
                }
            } else if(rd > ld){
                answer += 'L'
                leftLocation = coordinate[e]
            } else {
                answer += 'R'
                rightLocation = coordinate[e]
            }
        }
    })
    
    return answer;
}
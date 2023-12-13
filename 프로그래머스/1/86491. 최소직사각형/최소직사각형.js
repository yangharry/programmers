function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.map((e)=>{
        let [ew, eh] = e.sort((a,b)=> a-b);
        if(w < ew){
            w = ew
        } 
        if(h < eh){
            h = eh
        }
    })
    
    return w*h;
}
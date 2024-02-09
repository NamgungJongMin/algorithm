function solution(t, p) {
    let answer = 0;
    const pLength = p.length;
    const parts = [];
    
    for(let i =0; i <= t.length - pLength; i++){
        let count = 0;
        let part = "";
        
        while(count < p.length){
            part += t[i+count];
            count++;
        }
        
        parts.push(part);
    }
    
    parts.forEach((el)=>{
        answer += Number(el) <= Number(p) ? 1 : 0;
    })
    
    return answer;
}
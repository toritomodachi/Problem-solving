function solution(q, r, code) {
    let result =''
    
    for(i=0; i<code.length; i++){
        if(i%q === r){
            result += code[i]
        }
    }
    return result
}
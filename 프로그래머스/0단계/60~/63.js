function solution(n) {
    var s = 0
    for(let i = 2; i <= n; i+=2) 
        s += i
    return s
}
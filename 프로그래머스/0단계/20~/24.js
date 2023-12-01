function solution(a, b, c) {
    const count = [a, b, c].reduce((map, cur) => {
        map[cur] = (map[cur] || 0) + 1
        return map
    }, {})
    
    const 같은숫자의개수 = Math.max(...Object.values(count))
    let sum = 1
    for (let i=1; i<=같은숫자의개수; i++) {
        sum *= (Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i))
    }
    
    return sum
}
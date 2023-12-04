function solution(intStrs, k, s, l) {
    const r = [];
    intStrs.forEach(a => {
        const sliceStr = a.slice(s,s+l)
        const num = Number(sliceStr)
        if(num > k) r.push(num)
    })
    return r
}
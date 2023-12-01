function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [to, from, val] = cur
        const range = arr.slice(to, from+1)
        const biggerThan = range.filter(a => a > val)
        if(!biggerThan.length) return [...acc, -1]
        return [...acc, Math.min(...biggerThan)]
    }, [])
}
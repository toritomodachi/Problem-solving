function solution(my_string, s, e) {
    const arr = [...my_string]
    const reverseStr = arr.slice(s,e+1).reverse()
    arr.splice(s,reverseStr.length,reverseStr)
    const array = arr.flat()
    return array.join('')
}
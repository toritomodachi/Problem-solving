function solution(num_list) {
    let isEven = num_list.filter((a) => a % 2 === 0);
    let isOdd = num_list.filter((a) => a % 2 === 1);
    
    return Number(isEven.reduce((acc, cur) => acc + String(cur))) + Number(isOdd.reduce((acc, cur) => acc + String(cur)))
}

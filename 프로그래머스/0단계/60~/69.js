function solution(numbers) {
    const sums = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return sums / numbers.length
    
    
}
function solution(num, n) {
    const answer = num % n;
    return answer === 0 ? 1 : 0;
}
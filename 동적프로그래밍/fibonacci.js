function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[n];
    }
}

// 원하는 피보나치 수열 항의 인덱스를 전달
const n = 10;
const result = fibonacci(n);
console.log(`F(${n}) = ${result}`);

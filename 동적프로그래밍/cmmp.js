function chainMatrixMultiplication(dims) {
    const n = dims.length - 1; // 행렬 개수
    const m = []; // 최소 연산 횟수 저장 배열
    const s = []; // 최적 분할점 저장 배열

    for (let i = 0; i <= n; i++) {
        m[i] = [];
        m[i][i] = 0;
    }

    for (let chainLength = 2; chainLength <= n; chainLength++) {
        for (let i = 1; i <= n - chainLength + 1; i++) {
            const j = i + chainLength - 1;
            m[i][j] = Number.MAX_VALUE;
            for (let k = i; k < j; k++) {
                const cost = m[i][k] + m[k + 1][j] + dims[i - 1] * dims[k] * dims[j];
                if (cost < m[i][j]) {
                    m[i][j] = cost;
                    s[i][j] = k;
                }
            }
        }
    }

    return [m, s];
}

function printOptimalParens(s, i, j) {
    if (i === j) {
        console.log(`A${i}`);
    } else {
        console.log("(");
        printOptimalParens(s, i, s[i][j]);
        printOptimalParens(s, s[i][j] + 1, j);
        console.log(")");
    }
}

const dimensions = [30, 35, 15, 5, 10, 20, 25];
const [minOps, splitPoints] = chainMatrixMultiplication(dimensions);

console.log("Minimum number of multiplications:", minOps[1][dimensions.length - 1]);
console.log("Optimal parenthization:");

printOptimalParens(splitPoints, 1, dimensions.length - 1);

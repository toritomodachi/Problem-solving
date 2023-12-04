function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // 빈 문자열에 대한 초기화
    if (m === 0) return n;
    if (n === 0) return m;

    // DP 테이블 초기화
    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0;
        }
    }

    // DP 테이블 채우기
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],    // 삭제
                    dp[i][j - 1],    // 삽입
                    dp[i - 1][j - 1] // 교체
                );
            }
        }
    }

    return dp[m][n];
}

const string1 = "kitten";
const string2 = "sitting";
const distance = levenshteinDistance(string1, string2);
console.log("Levenshtein Distance:", distance);

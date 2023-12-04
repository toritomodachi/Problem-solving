function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    if (dp[amount] === Infinity) {
        return -1; // 거스름돈을 만들 수 없는 경우
    }

    // 거스름돈을 만들기 위한 동전 개수를 반환
    return dp[amount];
}

// 동전 종류와 금액
const coins = [1, 2, 5];
const amount = 11;

const minCoins = coinChange(coins, amount);
if (minCoins === -1) {
    console.log("거스름돈을 만들 수 없습니다.");
} else {
    console.log(`최소 동전 개수: ${minCoins}`);
}

function knapsack(items, capacity) {
    const n = items.length;
    const dp = new Array(n + 1).fill(null).map(() => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const weight = items[i - 1].weight;
        const value = items[i - 1].value;

        for (let w = 1; w <= capacity; w++) {
            if (weight <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

// 아이템 목록, 각각의 아이템은 무게(weight)와 가치(value)를 가지고 있음
const items = [
    { weight: 2, value: 3 },
    { weight: 3, value: 4 },
    { weight: 4, value: 5 },
    { weight: 5, value: 6 }
];

// 배낭의 용량
const capacity = 5;

const maxTotalValue = knapsack(items, capacity);
console.log("최대 가치:", maxTotalValue);

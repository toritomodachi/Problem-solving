function canPartitionWeights(weights, targetSum, currentIndex = 0, currentSum = 0) {
    // 기저 사례: 현재 합이 목표 합과 일치하면 성공
    if (currentSum === targetSum) {
        return true;
    }

    // 기저 사례: 현재 인덱스가 끝에 도달하거나 현재 합이 목표 합을 초과하면 실패
    if (currentIndex === weights.length || currentSum > targetSum) {
        return false;
    }

    // 현재 무게를 사용하는 경우
    if (canPartitionWeights(weights, targetSum, currentIndex + 1, currentSum + weights[currentIndex])) {
        return true;
    }

    // 현재 무게를 사용하지 않는 경우
    if (canPartitionWeights(weights, targetSum, currentIndex + 1, currentSum)) {
        return true;
    }

    return false;
}

// 테스트를 위한 예시 입력
const weights = [1, 3, 5, 7, 9];
const targetSum = 10;

const isPossible = canPartitionWeights(weights, targetSum);

if (isPossible) {
    console.log("가능한 조합이 있습니다.");
} else {
    console.log("가능한 조합이 없습니다.");
}

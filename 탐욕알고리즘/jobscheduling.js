function jobScheduling(jobs) {
    // 작업을 수익을 기준으로 내림차순으로 정렬
    jobs.sort((a, b) => b.profit - a.profit);

    const maxDeadline = Math.max(...jobs.map((job) => job.deadline));
    const result = new Array(maxDeadline).fill(null);

    for (const job of jobs) {
        for (let i = job.deadline - 1; i >= 0; i--) {
            if (!result[i]) {
                result[i] = job;
                break;
            }
        }
    }

    return result.filter((job) => job !== null);
}

// 예시 작업 목록, 각 작업은 수익(profit)과 마감 기한(deadline)을 가지고 있음
const jobs = [
    { profit: 35, deadline: 3 },
    { profit: 30, deadline: 4 },
    { profit: 25, deadline: 4 },
    { profit: 20, deadline: 2 },
    { profit: 15, deadline: 3 },
    { profit: 12, deadline: 1 },
    { profit: 5, deadline: 2 },
];

const scheduledJobs = jobScheduling(jobs);
console.log("작업 스케줄링 결과:");
console.log(scheduledJobs);

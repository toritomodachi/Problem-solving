function jobSelection(jobs) {
    // 작업을 종료 시간을 기준으로 오름차순 정렬
    jobs.sort((a, b) => a.end - b.end);

    const selectedJobs = [jobs[0]];
    let lastJob = jobs[0];

    for (let i = 1; i < jobs.length; i++) {
        if (jobs[i].start >= lastJob.end) {
            selectedJobs.push(jobs[i]);
            lastJob = jobs[i];
        }
    }

    return selectedJobs;
}

// 예시 작업 목록, 각 작업은 시작 시간(start)과 종료 시간(end)을 가지고 있음
const jobs = [
    { start: 1, end: 3 },
    { start: 2, end: 5 },
    { start: 3, end: 9 },
    { start: 6, end: 8 },
    { start: 5, end: 9 },
    { start: 7, end: 10 }
];

const selectedJobs = jobSelection(jobs);
console.log("선택된 작업:");
console.log(selectedJobs);

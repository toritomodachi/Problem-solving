function floydWarshall(graph) {
    const n = graph.length;
    const dist = new Array(n).fill(null).map(() => new Array(n));

    // 초기 거리 배열 초기화
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (graph[i][j] === 0) {
                dist[i][j] = Infinity;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }

    // 중간 정점을 하나씩 추가하여 최단 경로 갱신
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

// 예시 그래프, 0은 무한대(두 정점이 연결되지 않음을 나타냄)
const graph = [
    [0, 3, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0],
    [0, 0, 0, 7, 1, 0],
    [0, 0, 0, 0, 0, 4],
    [0, 0, 0, 2, 0, 5],
    [0, 0, 0, 0, 0, 0]
];

const shortestDistances = floydWarshall(graph);

// 결과 출력
console.log("Shortest Distances:");
for (let i = 0; i < shortestDistances.length; i++) {
    for (let j = 0; j < shortestDistances[i].length; j++) {
        console.log(`From ${i} to ${j}: ${shortestDistances[i][j]}`);
    }
}

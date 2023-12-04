// 그래프 데이터를 표현하기 위한 클래스
class Graph {
    constructor() {
        this.vertices = new Set();
        this.edges = new Map();
    }

    addVertex(vertex) {
        this.vertices.add(vertex);
        this.edges.set(vertex, []);
    }

    addEdge(start, end, weight) {
        this.edges.get(start).push({ end, weight });
        this.edges.get(end).push({ start, weight }); // 무방향 그래프의 경우
    }
}

// 다익스트라 알고리즘 함수
function dijkstra(graph, start) {
    const distances = new Map();
    const previous = new Map();
    const unvisited = new Set(graph.vertices);

    distances.set(start, 0);

    while (unvisited.size > 0) {
        let currentVertex = null;

        // 방문하지 않은 정점 중에서 거리가 가장 짧은 정점 선택
        unvisited.forEach((vertex) => {
            if (!currentVertex || distances.get(vertex) < distances.get(currentVertex)) {
                currentVertex = vertex;
            }
        });

        unvisited.delete(currentVertex);

        // 인접 정점의 거리 업데이트
        for (const neighbor of graph.edges.get(currentVertex)) {
            const potential = distances.get(currentVertex) + neighbor.weight;

            if (potential < (distances.get(neighbor.end) || Infinity)) {
                distances.set(neighbor.end, potential);
                previous.set(neighbor.end, currentVertex);
            }
        }
    }

    return { distances, previous };
}

// 최단 경로 출력 함수
function printShortestPath({ distances, previous }, end) {
    const path = [];
    let current = end;

    while (current) {
        path.unshift(current);
        current = previous.get(current);
    }

    return path;
}

// 예시 그래프 생성
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B', 2);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 7);
graph.addEdge('C', 'E', 3);
graph.addEdge('D', 'E', 1);

const startVertex = 'A';
const { distances, previous } = dijkstra(graph, startVertex);

console.log(`다익스트라 알고리즘을 사용하여 ${startVertex}에서 출발한 최단 경로:`);
for (const vertex of graph.vertices) {
    if (vertex !== startVertex) {
        const path = printShortestPath({ distances, previous }, vertex);
        const distance = distances.get(vertex);
        console.log(`출발점 ${startVertex}에서 ${vertex}까지의 최단 경로: ${path.join(' -> ')}, 최단 거리: ${distance}`);
    }
}

// 그래프 데이터를 표현하기 위한 클래스
class Graph {
    constructor() {
        this.vertices = new Set();
        this.edges = [];
    }

    addVertex(vertex) {
        this.vertices.add(vertex);
    }

    addEdge(start, end, weight) {
        this.edges.push({ start, end, weight });
        this.addVertex(start);
        this.addVertex(end);
    }
}

// 프림 알고리즘 함수
function prim(graph) {
    const minimumSpanningTree = new Graph();
    const visited = new Set();
    const startVertex = graph.vertices.values().next().value; // 임의의 시작 정점 선택

    visited.add(startVertex);

    while (visited.size < graph.vertices.size) {
        let minEdge = null;

        for (const edge of graph.edges) {
            if (visited.has(edge.start) && !visited.has(edge.end)) {
                if (!minEdge || edge.weight < minEdge.weight) {
                    minEdge = edge;
                }
            }
        }

        if (minEdge) {
            minimumSpanningTree.addEdge(minEdge.start, minEdge.end, minEdge.weight);
            visited.add(minEdge.end);
        } else {
            break;
        }
    }

    return minimumSpanningTree;
}

// 예시 그래프 생성
const graph = new Graph();
graph.addEdge('A', 'B', 2);
graph.addEdge('A', 'C', 3);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 4);
graph.addEdge('C', 'D', 5);

const minimumSpanningTree = prim(graph);
console.log('Minimum Spanning Tree:');
console.log(minimumSpanningTree.edges);

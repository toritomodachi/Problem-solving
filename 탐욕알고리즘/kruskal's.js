// 그래프 데이터를 표현하기 위한 클래스
class Graph {
    constructor() {
        this.edges = [];
    }

    addEdge(start, end, weight) {
        this.edges.push({ start, end, weight });
    }

    getVertices() {
        const vertices = new Set();
        for (const edge of this.edges) {
            vertices.add(edge.start);
            vertices.add(edge.end);
        }
        return Array.from(vertices);
    }
}

// 크루스칼 알고리즘 함수
function kruskal(graph) {
    const sortedEdges = graph.edges.sort((a, b) => a.weight - b.weight);
    const vertices = graph.getVertices();
    const minimumSpanningTree = new Graph();
    const parent = {};

    for (const vertex of vertices) {
        parent[vertex] = vertex;
    }

    function find(vertex) {
        if (vertex !== parent[vertex]) {
            parent[vertex] = find(parent[vertex]);
        }
        return parent[vertex];
    }

    function union(start, end) {
        parent[find(start)] = find(end);
    }

    for (const edge of sortedEdges) {
        if (find(edge.start) !== find(edge.end)) {
            minimumSpanningTree.addEdge(edge.start, edge.end, edge.weight);
            union(edge.start, edge.end);
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

const minimumSpanningTree = kruskal(graph);
console.log('Minimum Spanning Tree:');
console.log(minimumSpanningTree.edges);

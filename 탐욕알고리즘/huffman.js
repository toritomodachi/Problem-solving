class HuffmanNode {
    constructor(char, frequency) {
        this.char = char;
        this.frequency = frequency;
        this.left = null;
        this.right = null;
    }
}

function buildHuffmanTree(data) {
    // 문자 빈도를 계산
    const frequencyMap = new Map();
    for (const char of data) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // 노드를 우선순위 큐에 추가
    const priorityQueue = [];
    for (const [char, frequency] of frequencyMap) {
        priorityQueue.push(new HuffmanNode(char, frequency));
    }

    // 우선순위 큐를 사용하여 허프만 트리 빌드
    while (priorityQueue.length > 1) {
        priorityQueue.sort((a, b) => a.frequency - b.frequency);
        const left = priorityQueue.shift();
        const right = priorityQueue.shift();
        const parent = new HuffmanNode(null, left.frequency + right.frequency);
        parent.left = left;
        parent.right = right;
        priorityQueue.push(parent);
    }

    return priorityQueue[0];
}

function buildHuffmanCodes(root) {
    const huffmanCodes = new Map();
    function traverse(node, currentCode) {
        if (node.char !== null) {
            huffmanCodes.set(node.char, currentCode);
            return;
        }
        if (node.left) {
            traverse(node.left, currentCode + '0');
        }
        if (node.right) {
            traverse(node.right, currentCode + '1');
        }
    }

    traverse(root, '');
    return huffmanCodes;
}

function encodeWithHuffman(data, huffmanCodes) {
    let encodedData = '';
    for (const char of data) {
        encodedData += huffmanCodes.get(char);
    }
    return encodedData;
}

function decodeWithHuffman(encodedData, root) {
    let decodedData = '';
    let currentNode = root;
    for (const bit of encodedData) {
        if (bit === '0') {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
        if (currentNode.char !== null) {
            decodedData += currentNode.char;
            currentNode = root;
        }
    }
    return decodedData;
}

// 예시 데이터
const data = 'this is an example for huffman encoding';

// 허프만 트리 빌드
const huffmanTree = buildHuffmanTree(data);

// 허프만 코드 생성
const huffmanCodes = buildHuffmanCodes(huffmanTree);

// 데이터 인코딩
const encodedData = encodeWithHuffman(data, huffmanCodes);

// 데이터 디코딩
const decodedData = decodeWithHuffman(encodedData, huffmanTree);

console.log('원본 데이터:', data);
console.log('인코딩된 데이터:', encodedData);
console.log('디코딩된 데이터:', decodedData);

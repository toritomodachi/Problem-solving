class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function insert(root, key) {
    if (root === null) {
        return new Node(key);
    }

    if (key < root.data) {
        root.left = insert(root.left, key);
    } else if (key > root.data) {
        root.right = insert(root.right, key);
    }

    return root;
}

function inOrderTraversal(root, result) {
    if (root !== null) {
        inOrderTraversal(root.left, result);
        result.push(root.data);
        inOrderTraversal(root.right, result);
    }
}

function binaryTreeSort(arr) {
    let root = null;
    for (const element of arr) {
        root = insert(root, element);
    }

    const result = [];
    inOrderTraversal(root, result);
    return result;
}

const unsortedArray = [12, 4, 5, 6, 7, 3, 1, 15];
const sortedArray = binaryTreeSort(unsortedArray);
console.log(sortedArray);

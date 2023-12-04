// 퀵 정렬 알고리즘
function quickSort(arr, left, right, maxDepth) {
    while (right - left > 0) {
        if (maxDepth === 0) {
            heapSort(arr, left, right);
            return;
        }
        maxDepth--;

        const pivotIndex = partition(arr, left, right);
        if (pivotIndex - left < right - pivotIndex) {
            quickSort(arr, left, pivotIndex - 1, maxDepth);
            left = pivotIndex + 1;
        } else {
            quickSort(arr, pivotIndex + 1, right, maxDepth);
            right = pivotIndex - 1;
        }
    }
}

// 힙 정렬 알고리즘
function heapSort(arr, left, right) {
    for (let i = Math.floor((right - left + 1) / 2); i >= 0; i--) {
        heapify(arr, i, right - left, left);
    }

    for (let i = right - left; i >= 1; i--) {
        [arr[left], arr[left + i]] = [arr[left + i], arr[left]];
        heapify(arr, 0, i - 1, left);
    }
}

function heapify(arr, i, max, offset) {
    let largest, left, right;
    while (true) {
        left = 2 * i + 1;
        right = 2 * i + 2;
        largest = i;

        if (left <= max && arr[offset + left] > arr[offset + largest]) {
            largest = left;
        }

        if (right <= max && arr[offset + right] > arr[offset + largest]) {
            largest = right;
        }

        if (largest === i) {
            break;
        }

        [arr[offset + i], arr[offset + largest]] = [arr[offset + largest], arr[offset + i]];
        i = largest;
    }
}

function partition(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return left - 1;
}

// 인트로 소트 알고리즘
function introSort(arr) {
    const maxDepth = Math.floor(2 * Math.log2(arr.length));
    quickSort(arr, 0, arr.length - 1, maxDepth);
}

const unsortedArray = [12, 4, 5, 6, 7, 3, 1, 15];
introSort(unsortedArray);
console.log(unsortedArray);

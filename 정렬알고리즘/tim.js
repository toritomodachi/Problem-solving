function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= left && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
}

function merge(arr, left, mid, right) {
    const len1 = mid - left + 1;
    const len2 = right - mid;
    const leftArray = new Array(len1);
    const rightArray = new Array(len2);

    for (let i = 0; i < len1; i++) {
        leftArray[i] = arr[left + i];
    }
    for (let i = 0; i < len2; i++) {
        rightArray[i] = arr[mid + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < len1 && j < len2) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        } else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < len1) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < len2) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

function timSort(arr) {
    const minRun = 32;
    const n = arr.length;

    for (let i = 0; i < n; i += minRun) {
        insertionSort(arr, i, Math.min(i + minRun - 1, n - 1));
    }

    for (let size = minRun; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = Math.min(left + size - 1, n - 1);
            const right = Math.min(left + 2 * size - 1, n - 1);

            if (mid < right) {
                merge(arr, left, mid, right);
            }
        }
    }
}

const unsortedArray = [12, 4, 5, 6, 7, 3, 1, 15];
timSort(unsortedArray);
console.log(unsortedArray);

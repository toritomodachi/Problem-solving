function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (const element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    return quickSort(left).concat(equal, quickSort(right));
}

const unsortedArray = [12, 4, 5, 6, 7, 3, 1, 15];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);

function gravitySort(arr) {
    let i = 1;

    while (i < arr.length) {
        if (i === 0 || arr[i - 1] <= arr[i]) {
            i++;
        } else {
            // 두 원소를 교환하여 정렬
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
            i--;
        }
    }
}

const unsortedArray = [12, 4, 5, 6, 7, 3, 1, 15];
gravitySort(unsortedArray);
console.log(unsortedArray);

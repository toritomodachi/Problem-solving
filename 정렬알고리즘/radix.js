// 가장 큰 숫자를 찾는 함수
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// 숫자의 자릿수를 반환하는 함수
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// 기수 정렬 알고리즘
function radixSort(arr) {
    const max = findMax(arr);
    const maxDigits = Math.floor(Math.log10(max)) + 1;

    for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < arr.length; j++) {
            const digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }

        arr = [].concat(...buckets);
    }

    return arr;
}

const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray);

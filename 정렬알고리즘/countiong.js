function countingSort(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;
    
    // 각 원소의 발생 횟수를 세는 배열
    const countArray = new Array(range).fill(0);

    // 각 원소의 발생 횟수를 세고 저장
    for (let i = 0; i < arr.length; i++) {
        countArray[arr[i] - min]++;
    }

    // countArray를 사용하여 정렬된 배열을 생성
    const sortedArray = [];
    for (let i = 0; i < range; i++) {
        for (let j = 0; j < countArray[i]; j++) {
            sortedArray.push(i + min);
        }
    }

    return sortedArray;
}

const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray);

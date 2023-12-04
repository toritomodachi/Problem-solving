// 블록 병합 정렬 함수
function blockMergeSort(arr) {
    const blockSize = 2; // 블록 크기

    // 입력 데이터를 블록 단위로 나누기
    const blocks = [];
    for (let i = 0; i < arr.length; i += blockSize) {
        blocks.push(arr.slice(i, i + blockSize));
    }

    // 각 블록을 내부적으로 정렬
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].sort((a, b) => a - b);
    }

    // 정렬된 블록을 병합하여 최종 정렬된 결과 생성
    const sortedArray = mergeBlocks(blocks);
    return sortedArray;
}

// 블록 병합 함수
function mergeBlocks(blocks) {
    const merged = [];
    while (blocks.length > 0) {
        let minBlockIndex = 0;
        for (let i = 1; i < blocks.length; i++) {
            if (blocks[i][0] < blocks[minBlockIndex][0]) {
                minBlockIndex = i;
            }
        }

        merged.push(blocks[minBlockIndex].shift());

        if (blocks[minBlockIndex].length === 0) {
            blocks.splice(minBlockIndex, 1);
        }
    }

    return merged;
}

// 예시 배열
const unsortedArray = [12, 4, 5, 6, 7, 3, 1, 15];
const sortedArray = blockMergeSort(unsortedArray);
console.log(sortedArray);

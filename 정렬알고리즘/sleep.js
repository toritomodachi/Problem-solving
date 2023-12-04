function sleepSort(arr) {
    const sortedArray = [];

    arr.forEach((num) => {
        setTimeout(() => {
            sortedArray.push(num);
            if (sortedArray.length === arr.length) {
                console.log(sortedArray);
            }
        }, num);
    });
}

const unsortedArray = [5, 1, 9, 3, 7];
sleepSort(unsortedArray);

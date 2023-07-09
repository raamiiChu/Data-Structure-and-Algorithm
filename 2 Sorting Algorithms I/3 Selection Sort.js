function selectionSort(arr) {
    for (let i = 1; i <= arr.length-2; i++) {
        // 找出第 i 小的值
        let minIndex = i;
        for (let j = i; j < arr.length-1; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        // 交換位置
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    console.log(arr);
}

// [4, 5, 7, 9, 12, 123, 765, 52234, 53458]
selectionSort([4, 5, 7, 12, 9, 53458, 52234, 765, 123]);
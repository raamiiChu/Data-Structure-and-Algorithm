function insertionSort(arr) {
    for (let j = 1; j <= arr.length-1; j++) {
        // 當前要插入的值
        let key = arr[j];
        
        // 逐一比對大小
        let i = j - 1;
        while (i >= 0 && arr[i] > key){
            // 比 key 大，則往後移動
            arr[i+1] = arr[i];
            i -= 1;
        }
        arr[i+1] = key;
    }

    console.log(arr);
}

// [4, 5, 7, 9, 12, 123, 765, 52234, 53458]
insertionSort([4, 5, 7, 12, 9, 53458, 52234, 765, 123]);
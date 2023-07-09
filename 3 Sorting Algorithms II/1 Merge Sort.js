function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;

    // 比較並將較小的資料存入陣列
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j += 1;
        }
        else {
            result.push(arr1[i]);
            i += 1;
        }
    }

    // 將剩餘的資料存入
    while (i < arr1.length){
        result.push(arr1[i]);
        i += 1;
    }

    while (j < arr2.length){
        result.push(arr2[j]);
        j += 1;
    }

    return result;
}

function mergeSort(arr){
    // 持續分割成兩部分，直到陣列剩下一個資料
    if (arr.length === 1){
        return arr;
    }
    else {
        let middle = Math.floor(arr.length / 2)
        let left = arr.slice(0, middle);
        let right = arr.slice(middle, arr.length);
        return merge(mergeSort(left), mergeSort(right));
    }

}

// [1, 2, 4, 5, 7, 8, 9, 10, 15]
console.log(merge([1, 5, 7, 9, 15], [2, 4, 8, 10]));

// [4, 5, 7, 9, 12, 123, 765, 52234, 53458]
console.log(mergeSort([4, 5, 7, 12, 9, 53458, 52234, 765, 123]));
function partition(p, r){
    let x = arr[r];  // pivit
    let i = p - 1;   // counting how many items are less than the pivit

    for (let j = p; j <= r - 1; j++){
        if (arr[j] <= x){
            i += 1;

            // exchange A[i] with A[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // exchange A[i+1] with A[r]
    let temp = arr[i+1];
    arr[i+1] = arr[r];
    arr[r] = temp;

    return i + 1;  // index of pivit
}

function quickSort(p, r){
    // at least two items
    if (p < r){
        let q = partition(p, r);
        quickSort(p, q - 1);
        quickSort(q + 1, r);
    }
}

let arr = [1, 32, 45, 231, 46, 8, 67, 134, 686, 246, 890, 358, 786];

// When calling Quick-Sort() the first time, just pass 0 & arr.length-1 as parameters
quickSort(0, arr.length - 1);

// [1, 8, 32, 45, 46, 67, 134, 231, 246, 358, 686, 786, 890]
console.log(arr);
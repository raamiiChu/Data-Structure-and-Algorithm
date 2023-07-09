// 將整個資料初始化成 MH
function bulidMaxHeap(){
    heapSize = arr.length - 1;

    // (A.length/2)-1 剛好在倒數第二層最右邊
    for (let i = Math.floor(heapSize / 2); i >= 0; i--){
        maxHeapify(i);
    }
}

// 針對部分內容調整為 MH
function maxHeapify(i){
    let largest;
    let l = i * 2 + 1;
    let r = i * 2 + 2;

    // 比較最大值 (i, l, r)
    if (l <= heapSize && arr[l] > arr[i]){
        largest = l;
    }
    else{
        largest = i;
    }

    if (r <= heapSize && arr[r] > arr[largest]){
        largest = r;
    }


    // 父節點非最大值則交換，並執行底下的子樹
    if (largest !== i){
        let temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;
        maxHeapify(largest);
    }
}

function heapSort(){
    // 將 BT 轉成 MH
    bulidMaxHeap();

    for (let i = arr.length - 1; i >= 0; i--){
        // 將 “root”（最大值）與右下角節點調換
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // 排除最右下角的節點 
        heapSize -= 1;

        // 將整棵樹重新調整為 “Max Heap”
        maxHeapify(0);
    }

    return arr;
}


// heapSize & arr are global variables, since they are used in more than one function.
let heapSize;
let arr = [34, 192, 923, 48, 348, 123, 943, 193];

// [34, 48, 123, 192, 193, 348, 923, 943]
console.log(heapSort(arr));
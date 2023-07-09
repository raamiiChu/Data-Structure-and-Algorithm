function bubbleSort(arr){
    let step = 0;

    for (let i = 0; i <= arr.length - 2; i++){
        for (let j = arr.length - 1; j >= i + 1; j--){
            // 後者比前者小，則對調位置
            if (arr[j] < arr[j-1]){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                step += 1;
            }
        }
    }

    console.log(`It takes ${step} steps to complete`);
    console.log(arr);
};

// [4, 5, 7, 9, 12, 123, 765, 52234, 53458]
bubbleSort([4, 5, 7, 12, 9, 53458, 52234, 765, 123]);
bubbleSort([1, 2, 3, 4, 5, 6, 7]);

let test = [];
for (let i = 0; i < 100; i++){
    test.push(Math.floor(Math.random() * 1000));
}
bubbleSort(test);

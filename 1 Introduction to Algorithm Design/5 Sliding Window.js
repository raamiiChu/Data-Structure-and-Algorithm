function maxSum(arr, size){
    let maxValue = 0;

    // 計算前 n 項的總和
    for (let i = 0; i < size; i++){
        maxValue += arr[i];
    }

    // 往後滑動，依序檢查總和是否為最大值
    let tempValue = maxValue;
    for (let j = size; j < arr.length; j++){
        tempValue = tempValue + arr[j] - arr[j - size];

        if (tempValue > maxValue){
            maxValue = tempValue;
        }
    }

    return maxValue;
}

console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2));  // 10
console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));  // 12
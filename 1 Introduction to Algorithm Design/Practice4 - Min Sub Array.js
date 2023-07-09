function minSubArray(arr, target){
    let left = 0;
    let right = 0;
    let minLength = Infinity;

    let total = arr[0];
    while (right <= arr.length){
        // 大於等於 => 比較最小值，刪除左數值，左指標向右
        if (total >= target){
            minLength = Math.min(minLength, right - left + 1)
            total -= arr[left];
            left += 1;
        }
        // 小於 => 新增右數值，右指標向右
        else{
            right += 1;
            total += arr[right]
        }
            
    }
    return minLength !== Infinity ? minLength : -1;
}


console.log(minSubArray([9, 8, 1, 4, 9, 5, 1, 2], 11));  // 2
console.log(minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60));  // 2

console.log(minSubArray([], 60));  // -1
console.log(minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 6000));  // -1
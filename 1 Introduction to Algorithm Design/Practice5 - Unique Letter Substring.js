function uniqueLetterString(str){
    let left = 0;
    let right = 0;
    let maxLength = -Infinity;
    let counter = {};

    while (right < str.length){
        // 右指標向右，同時紀錄數量
        if (!counter[str[right]]) {
            counter[str[right]] = 1;
        }
        else {
            counter[str[right]] += 1;
        }

        // 重複字元
        if (counter[str[right]] > 1){
            // 紀錄長度
            maxLength = Math.max(maxLength, right - left);
            
            // 左指標向右，直到刪除重複字元
            left += 1;
            if (counter[str[left]] === counter[str[right]]){
                counter[str[left]] -= 1;
                left += 1;
            }
        }
        
        right += 1;
    }
    maxLength = Math.max(maxLength, right - left);
    return maxLength
}


console.log(uniqueLetterString("thisishowwedoit"));
console.log(uniqueLetterString("aaaaaa"));
console.log(uniqueLetterString(""));
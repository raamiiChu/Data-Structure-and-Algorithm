function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = [];
    
    while (left <= right){
        let average = (arr[left] + arr[right]) / 2;

        if (average > target){
            right -= 1;
        }
        else if (average < target){
            left += 1;
        }
        else {
            result.push([arr[left], arr[right]]);
            right -= 1;
            left += 1;
        }
    }

    return result
};

// [ [ -11, 14 ], [ 0, 3 ], [ 1, 2 ] ]
console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));
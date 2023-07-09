function binarySearch(arr, n) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max){
        let middle = Math.floor((min + max) / 2);

        if (n > arr[middle]){
            min = middle + 1;
        }
        else if (n < arr[middle]){
            max = middle - 1;
        }
        else{
            return middle;
        }
    };

    return -1;
};

let numbers = [1, 4, 6, 7, 13, 32, 36, 48, 55, 68, 90, 94, 101, 120, 130];
console.log(binarySearch(numbers, 13));   // 4
console.log(binarySearch(numbers, 100));  // -1
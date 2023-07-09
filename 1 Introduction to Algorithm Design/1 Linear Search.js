function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n){
            return i;
        }
    }
    return -1;
}

let numbers = [1, 5, 34, 4, 6, 7, 13, 67, 32, 3, 4, 5, 6];
console.log(linearSearch(numbers, 13));   // 6
console.log(linearSearch(numbers, 100));  // -1
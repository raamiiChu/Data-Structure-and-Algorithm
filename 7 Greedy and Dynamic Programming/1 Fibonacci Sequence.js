function fib(n){
    for (let i = 2; i <= n; i++){
        result.push(result[i-1] + result[i-2]);
        // console.log(result);
    }
    return result[n];
}


let result = [0, 1];

console.log(fib(10));  // 55
console.log(result);   // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55]
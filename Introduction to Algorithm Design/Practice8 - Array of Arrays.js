let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];


// let result = [];

// function collector(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (Array.isArray(arr[i])){
//             collector(arr[i]);
//         }
//         else{
//             result.push(arr[i]);
//         }
//     }
// }

// collector(arrs);
// console.log(result);  // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


function collector(arr) {
    let result = [];
    helper(arr);
    return result;

    function helper(arr2){
        for (let i = 0; i < arr2.length; i++){
            if (Array.isArray(arr2[i])){
                helper(arr2[i]);
            }
            else{
                result.push(arr2[i]);
            }
        }
    }
}

console.log(collector(arrs));  // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
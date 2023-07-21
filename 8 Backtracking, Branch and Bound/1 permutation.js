// function p1(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             for (let k = 0; k < arr.length; k++) {
//                 if (i == k || i == j || j == k) {
//                     continue;
//                 }
//                 console.log(arr[i] + " " + arr[j] + " " + arr[k]);
//             }
//         }
//     }
// }

// p1(["A", "B", "C"]);

// A B C
// A C B
// B A C
// B C A
// C A B
// C B A

// function permutation(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i === j) {
//                 continue;
//             }
//             for (let k = 0; k < arr.length; k++) {
//                 if (i === k || j === k) {
//                     continue;
//                 }
//                 console.log(arr[i] + " " + arr[j] + " " + arr[k]);
//             }
//         }
//     }
// }
// permutation(["A", "B", "C"]);

function perm(arr, start) {
    if (start >= arr.length) {
        result.push([...arr]);
    } 
    else {
        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i);   // 交換
            perm(arr, start + 1);  // 排列
            swap(arr, start, i);   // 換回來
        }
    }
}

function swap(arr, n1, n2) {
    let temp = arr[n2];
    arr[n2] = arr[n1];
    arr[n1] = temp;
}

let result = [];

perm(["A", "B", "C", "D"], 0);
console.log(result);

// [
//     [ 'A', 'B', 'C', 'D' ], [ 'A', 'B', 'D', 'C' ],
//     [ 'A', 'C', 'B', 'D' ], [ 'A', 'C', 'D', 'B' ],
//     [ 'A', 'D', 'C', 'B' ], [ 'A', 'D', 'B', 'C' ],
//     [ 'B', 'A', 'C', 'D' ], [ 'B', 'A', 'D', 'C' ],
//     [ 'B', 'C', 'A', 'D' ], [ 'B', 'C', 'D', 'A' ],
//     [ 'B', 'D', 'C', 'A' ], [ 'B', 'D', 'A', 'C' ],
//     [ 'C', 'B', 'A', 'D' ], [ 'C', 'B', 'D', 'A' ],
//     [ 'C', 'A', 'B', 'D' ], [ 'C', 'A', 'D', 'B' ],
//     [ 'C', 'D', 'A', 'B' ], [ 'C', 'D', 'B', 'A' ],
//     [ 'D', 'B', 'C', 'A' ], [ 'D', 'B', 'A', 'C' ],
//     [ 'D', 'C', 'B', 'A' ], [ 'D', 'C', 'A', 'B' ],
//     [ 'D', 'A', 'C', 'B' ], [ 'D', 'A', 'B', 'C' ]
// ]
  
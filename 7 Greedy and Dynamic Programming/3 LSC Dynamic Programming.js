function LCS(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    table1 = [];  // 標示 LCS 數字
    table2 = [];  // 標示方向

    // table1
    // 空字串 ~ 完整的 str1
    for (let i = 0; i <= m ; i++){
        table1.push([]);
        table1[i][0] = 0;  // 第一個 col 皆為 0

        // 其餘值皆為 null
        for (let k = 1; k <= n; k++){
            table1[i].push(null);
        }

        // [
        //     [0, null, null, null], 
        //     [0, null, null, null], 
        //     [0, null, null, null], 
        //     [0, null, null, null], 
        //     [0, null, null, null]
        // ]
    }

    for (let j = 0; j <= n; j++){
        table1[0][j] = 0;
    }
    // [
    //     [0, 0, 0, 0], 
    //     [0, null, null, null], 
    //     [0, null, null, null], 
    //     [0, null, null, null], 
    //     [0, null, null, null]
    // ]

    // table2
    // 全部值皆為 null
    for (let i = 0 ; i <= m ; i++){
        table2.push([]);

        for (let k = 0; k <= n; k++){
            table2[i].push(null);
        }
    }

    // LCS
    for (let i = 1; i <= m; i++){
        for (let j = 1; j <= n; j++){
            // 相同 => 繼承左上的值，然後 +1
            if (str1[i-1] === str2[j-1]){
                table1[i][j] = 1 + table1[i-1][j-1];
                table2[i][j] = "↖";  // 指向左上
            }
            // 不同 => 比較 左邊 & 上面 哪個比較大，然後繼承下來
            else if (table1[i-1][j] > table1[i][j-1]){
                table1[i][j] = table1[i-1][j];
                table2[i][j] = "↑";  // 指向上面
            }
            
            else{
                table1[i][j] = table1[i][j-1];
                table2[i][j] = "←";  // 指向左邊
            }
        }
    }

    console.log(table1);
    console.log(table2);
}


function printLCS(i, j) {
    if (i === 0 || j === 0){
        return;
    }

    if (table2[i][j] === "↖"){
        printLCS(i-1, j-1);
        result += x[i-1];
    }
    else if (table2[i][j] === "↑"){
        printLCS(i-1, j);
    }
    else{
        printLCS(i, j-1);
    }
}

let table1;  // 標示 LCS 數字
let table2;  // 標示方向
let result = "";

let x = "ABCD";
let y = "ABC";
// let x = "ATTTGGCTA"
// let y = "TTAGCCAT"

LCS(x, y);
printLCS(x.length, y.length);
console.log(result);  // ABC

// table1
// [
//     [ 0, 0, 0, 0 ],
//     [ 0, 1, 1, 1 ],
//     [ 0, 1, 2, 2 ],
//     [ 0, 1, 2, 3 ],
//     [ 0, 1, 2, 3 ]
// ]

// table2
// [
//     [ null, null, null, null ],
//     [ null, '↖', '←', '←' ],
//     [ null, '↑', '↖', '←' ],
//     [ null, '↑', '↑', '↖' ],
//     [ null, '↑', '↑', '↑' ]
// ]
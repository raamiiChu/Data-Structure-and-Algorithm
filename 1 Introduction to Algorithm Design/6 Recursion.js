function rs(n){
    if (n === 1){
        return 10
    }

    return rs(n-1) + 15
};

console.log(rs(3));   // 40
console.log(rs(10));  // 145
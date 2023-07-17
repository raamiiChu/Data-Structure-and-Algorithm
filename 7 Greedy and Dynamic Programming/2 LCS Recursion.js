function LCS(str1, str2) {
    if (str1.length === 0 || str2.length === 0){
        return 0;
    }

    // 最後一項相同 => 刪掉最後一項做遞迴
    if (str1[str1.length - 1] === str2[str2.length - 1]){
        return 1 + LCS(str1.slice(0, -1), str2.slice(0, -1));
    }
    // 最後一項不同 => 分別刪掉最後一項做遞迴
    else{
        return Math.max(
            LCS(str1.slice(0, -1), str2),
            LCS(str1, str2.slice(0, -1))
        );
    }
}

console.log(LCS("AGB", "ACB"));  // 2
console.log(LCS("ATAACGCGCTGCTCGGGT", "TCAATCAGGATCCGCTGA"));  // 11
function isSubsequence(str1, str2){
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer2 <= str2.length - 1){
        if (str1[pointer1] === str2[pointer2]){
            pointer1 += 1;
        }
        if (pointer1 >= str1.length){
            return true
        }
        pointer2 += 1;
    }

    return false;
};

console.log(isSubsequence("hello", "hello Dear"));  // true
console.log(isSubsequence("book", "brooklyn"));     // true
console.log(isSubsequence("abc", "acb"));           // false (order matter)
console.log(isSubsequence("", "acb"));              // true
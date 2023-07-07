function isPalindrome(str){
    let left = 0;
    let right = str.length - 1;

    while (left <= right){
        if (str[left] !== str[right]){
            return false;
        };
        
        left += 1;
        right -= 1;
    }

    return true;
};

console.log(isPalindrome("awesome"));  // false
console.log(isPalindrome("foobar"));   // false
console.log(isPalindrome("tacocat"));  // true
console.log(isPalindrome("amanaplanacanalpanama"));  // true
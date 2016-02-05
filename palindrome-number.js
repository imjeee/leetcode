/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    var y = 0;
    var z = x;
    while(x > 0) {
        y = y*10 + x%10;
        x = Math.floor(x/10);
    }
    return y === z;
};
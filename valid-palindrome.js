/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var left = 0;
    var right = s.length-1;
    s = s.toLowerCase();
    while(left < right) {
        while(left < s.length && !s[left].match(/^[a-z0-9]+$/i)) left++;
        while(right >= 0 && !s[right].match(/^[a-z0-9]+$/i)) right--;
        if (left >= right) return true;
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};
/**
 * https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) return -1;
    
    function match(i, needle, haystack) {
        for (var j = 0; j < needle.length; j++)
            if (needle[j] !== haystack[i+j]) return false;
        return true;
    }
    
    for (var i = 0; i < haystack.length - needle.length + 1; i++) {
        if (match(i, needle, haystack)) return i;
    }
    return -1;
};
/**
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.trim().split(/\s+/).reverse().join(' ');
};
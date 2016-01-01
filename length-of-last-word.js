/**
 * https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var list = s.trim().split(/\s+/);
    return list[list.length-1].length;
};
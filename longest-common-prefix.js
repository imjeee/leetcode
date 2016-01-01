/**
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) return '';
    
    var prefix = '';
    for (var c = 0; c < strs[0].length; c++) {
        var chr = strs[0][c];
        for (var r = 1; r < strs.length; r++) {
            if (strs[0][c] !== strs[r][c]) return prefix;
        }
        prefix += chr;
    }
    return prefix;
};
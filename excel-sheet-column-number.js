/**
 * https://leetcode.com/problems/excel-sheet-column-number/
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    if (s === null || s.length === 0) return 0;
    
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var num = s.charCodeAt(i) - 64;
        result *= 26;
        result += num;
    }
    return result;
};
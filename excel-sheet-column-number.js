/**
 * https://leetcode.com/problems/excel-sheet-column-number/
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var num = s.charCodeAt(i) - 64;
        result = result*26 + num;
    }
    return result;
};
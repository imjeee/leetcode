/**
 * https://leetcode.com/problems/excel-sheet-column-title/
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if (n <= 0) return '';
    var result = '';
    while(n > 0) {
        n--;
        result = String.fromCharCode(n%26 + 65) + result;
        n = Math.floor(n/26);
    }
    return result;
};
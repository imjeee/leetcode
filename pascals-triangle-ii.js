/**
 * https://leetcode.com/problems/pascals-triangle-ii/
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [];
    for (var i = 0; i <= rowIndex; i++) {
        var newRow = [];
        for (var j = 0; j <= i; j++) {
            if (j === 0 || j === i)
                newRow.push(1);
            else
                newRow.push(result[j-1] + result[j]);
        }
        result = newRow;
    }
    return result;
};
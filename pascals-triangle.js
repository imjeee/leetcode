/**
 * https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    for (var i = 0; i < numRows; i++) {
        var newRow = [];
        for (var j = 0; j <= i; j++) {
            if (j === 0 || j === i)
                newRow.push(1);
            else
                newRow.push(result[i-1][j-1] + result[i-1][j]);
        }
        result.push(newRow);
    }
    return result;
};
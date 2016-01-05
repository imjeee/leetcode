/**
 * https://leetcode.com/problems/maximal-square/
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix === null || matrix.length === 0) return 0;
    var max = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (i !== 0 && j !== 0 && matrix[i][j] === '1') {
                if (matrix[i-1][j] !== '0' && matrix[i][j-1] !== '0' && matrix[i-1][j-1] !== '0') {
                    matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1;
                }
            }
            max = Math.max(matrix[i][j], max);
        }
    }
    return max*max;
};
/**
 * https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix.length < 2) return;
    
    var n = matrix.length;
    
    var newMatrix = [];
    for (var k = 0; k < n; k++) {
        newMatrix.push([]);
    }
    
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            newMatrix[j][n - i - 1] = matrix[i][j];
        }
    }
    
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            matrix[i][j] = newMatrix[i][j];
        }
    }
};
/**
 * https://leetcode.com/problems/set-matrix-zeroes/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if (matrix === null || matrix.length === 0) return matrix;
    
    var rowZero = (function(matrix) {
	    for (var i = 0; i < matrix[0].length; i++) {
		if (matrix[0][i] === 0) return true;
	    }
	    return false;
	}(matrix));
    
    var columnZero = (function(matrix) {
	    for (var i = 0; i < matrix.length; i++) {
		if (matrix[i][0] === 0) return true;
	    }
	    return false;
	}(matrix));
    
    for (var i = 1; i < matrix.length; i++) {
        for (var j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    
    for (i = 1; i < matrix.length; i++) {
        for (j = 1; j < matrix[i].length; j++) {
            if (matrix[0][j] === 0 || matrix[i][0] === 0)
                matrix[i][j] = 0;
        }
    }
    
    if (rowZero) {
        for (i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }
    
    if (columnZero) {
        for (j = 0; j < matrix.length; j++) {
            matrix[j][0] = 0;
        }
    }
};
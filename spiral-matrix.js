/**
 * https://leetcode.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    
    var result = [];
    
    var left = 0;
    var right = matrix[0].length-1;
    var top = 0;
    var bottom = matrix.length-1;
    
    var size = matrix.length * matrix[0].length;
    var count = 0;
    while(count < size) {
        for (var i = left; i <= right; i++) {
            result.push(matrix[top][i]);
            count++;
        }
        top++;
        for (i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
            count++;
        }
        right--;
        for (i = right; i >= left && bottom >= top; i--) {
            result.push(matrix[bottom][i]);
            count++;
        }
        bottom--;
        for (i = bottom; i >= top && left <= right; i--) {
            result.push(matrix[i][left]);
            count++;
        }
        left++;
    }
    return result;
};
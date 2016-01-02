/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var low = 0;
    var high = matrix.length * matrix[0].length - 1;
    while(low <= high) {
        var mid = Math.floor((low + high)/2);
        var width = matrix[0].length;
        var num = matrix[Math.floor(mid/width)][mid%width];
        if (num === target) return true;
        if (num < target) low = mid + 1;
        if (num > target) high = mid - 1;
    }
    return false;
};
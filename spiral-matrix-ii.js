/**
 * https://leetcode.com/problems/spiral-matrix-ii/
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n === 1) return [[1]];
    
    var result = [];
    for (var i = 0; i < n; i++) result.push([]);
    
    var left = 0;
    var right = n-1;
    var top = 0;
    var bottom = n-1;
    
    var count = 1;
    while(count <= n*n) {
        for (i = left; i <= right; i++) result[top][i] = count++;
        top++;
        for (i = top; i <= bottom; i++) result[i][right] = count++;
        right--;
        for (i = right; i >= left; i--) result[bottom][i] = count++;
        bottom--;
        for (i = bottom; i >= top; i--) result[i][left] = count++;
        left++;
    }
    
    return result;
};
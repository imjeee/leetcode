/**
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    var map = [];
    var result = 0;
    var seen = {};
    
    for (var i = 0; i < matrix.length; i++) {
        map.push([]);
    }
    
    function findLongest(i,j,prev) {
        if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length) return 0; // out of bound
        if (seen[i + '-' + j] === true) return 0; // already seen
        if (matrix[i][j] <= prev) return 0; // not bigger than previous value
        if (map[i][j] !== undefined) return map[i][j]; // already calculated
        
        var longest = 1;
        var val = matrix[i][j];
        
        seen[i + '-' + j] = true;
        var one = findLongest(i-1, j, val);
        var two = findLongest(i, j+1, val);
        var three = findLongest(i+1, j, val);
        var four = findLongest(i, j-1, val);
        seen[i + '-' + j] = false;
        
        longest += Math.max(one, two, three, four);
        
        map[i][j] = longest;
        return longest;
    }
    
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            var longest = findLongest(i,j,Math.NEGATIVE_INFINITY);
            result = Math.max(result, longest);
        }
    }
    
    return result;
};
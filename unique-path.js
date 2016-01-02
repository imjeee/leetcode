/**
 * https://leetcode.com/problems/unique-paths/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var path = [];
    for (var i = 0; i < m; i++) {
        path.push([]);
        for (var j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                path[i][j] = 1;
            } else {
                path[i][j] = path[i-1][j] + path[i][j-1];
            }
        }
    }
    return path[path.length-1][path[0].length-1];
};
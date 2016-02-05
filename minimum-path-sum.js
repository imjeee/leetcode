/**
 * https://leetcode.com/problems/minimum-path-sum/
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid === null || grid.length === 0) return 0;
    
    for (var r = 1; r < grid.length; r++) grid[r][0] += grid[r-1][0];
    for (var c = 1; c < grid[0].length; c++) grid[0][c] += grid[0][c-1];
    
    for (r = 1; r < grid.length; r++) {
        for (c = 1; c < grid[0].length; c++) {
            grid[r][c] = grid[r][c] + Math.min(grid[r-1][c], grid[r][c-1]);
        }
    }
    return grid[grid.length-1][grid[0].length-1];
};
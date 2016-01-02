/**
 * https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0;
    
    var removeIsland = function(i, j, grid) {
        var q = [[i, j]];
        while(q.length > 0) {
            var pos = q.pop();
            i = pos[0];
            j = pos[1];
            if (i < 0 || i >= grid.length) continue;
            if (i < 0 || i >= grid.length) continue;
            if (grid[i][j] === '1') {
                grid[i][j] = 0;
                q.push([i-1, j]);
                q.push([i+1, j]);
                q.push([i, j-1]);
                q.push([i, j+1]);
            }
        }
    }
    
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                removeIsland(i, j, grid);
            }
        }
    }
    return count;
};
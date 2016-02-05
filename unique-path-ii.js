/**
 * https://leetcode.com/problems/unique-paths-ii/
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;
    
    obstacleGrid[0][0] = 1;
    for (var r = 1; r < obstacleGrid.length; r++) {
        if (obstacleGrid[r][0] === 1 || obstacleGrid[r-1][0] === 0)
            obstacleGrid[r][0] = 0;
        else
            obstacleGrid[r][0] = 1;
    }
    
    for (var c = 1; c < obstacleGrid[0].length; c++) {
        if (obstacleGrid[0][c] === 1 || obstacleGrid[0][c-1] === 0)
            obstacleGrid[0][c] = 0;
        else
            obstacleGrid[0][c] = 1;
    }
    
    for (r = 1; r < obstacleGrid.length; r++) {
        for (c = 1; c < obstacleGrid[0].length; c++) {
            if (obstacleGrid[r][c] === 1)
                obstacleGrid[r][c] = 0;
            else
                obstacleGrid[r][c] = obstacleGrid[r-1][c] + obstacleGrid[r][c-1];
        }
    }
    
    return obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1];
};

/**
 * https://leetcode.com/problems/unique-paths-ii/
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;
    
    for (var i = 0; i < obstacleGrid.length; i++) {
        for (var j = 0; j < obstacleGrid[i].length; j++) {
            if (i === 0) {
                if (j === 0)  {
                    obstacleGrid[i][j] = 1;
                } else if (obstacleGrid[i][j] === 1 || obstacleGrid[i][j-1] === 0) {
                    obstacleGrid[i][j] = 0;
                } else {
                    obstacleGrid[i][j] = 1;
                }
            } else if (j === 0) {
                if (obstacleGrid[i][j] === 1 || obstacleGrid[i-1][j] === 0) {
                    obstacleGrid[i][j] = 0;
                } else {
                    obstacleGrid[i][j] = 1;
                }
            } else {
                if (obstacleGrid[i][j] === 1) {
                    obstacleGrid[i][j] = 0;
                } else {
                    obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
                }
            }
        }
    }
    return obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1];
};
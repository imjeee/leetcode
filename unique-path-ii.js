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
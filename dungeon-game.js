/**
 * https://leetcode.com/problems/dungeon-game/
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    if (dungeon === null || dungeon.length === 0) return 0;
    
    var r = dungeon.length-1;
    var c = dungeon[0].length-1;

    for (var i = r-1; i >= 0; i--) {
        dungeon[i][c] = Math.min(0, dungeon[i+1][c] + dungeon[i][c], dungeon[i][c]);
    }
    
    for (var j = c-1; j >= 0; j--) {
        dungeon[r][j] =  Math.min(0, dungeon[r][j+1] + dungeon[r][j], dungeon[r][j]);
    }
    
    for (i = r-1; i >= 0; i--) {
        for (j = c-1; j >= 0; j--) {
            var right = dungeon[i][j] + dungeon[i][j+1];
            var down = dungeon[i][j] + dungeon[i+1][j];
            dungeon[i][j] = Math.min(0, Math.max(right, down));
            
        }
    }
    
    if (dungeon[0][0] >= 0) return 1;
    
    return 1-dungeon[0][0];
};
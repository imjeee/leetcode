/**
 * https://leetcode.com/problems/surrounded-regions/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length < 3) return;
    
    var m = board.length-1;
    var n = board[0].length-1;
    
    function markDash(i, j, board) {
        var q = [[i, j]];
        while(q.length > 0) {
            var pos = q.pop();
            i = pos[0];
            j = pos[1];
            if (i < 0 || i >= board.length) continue;
            if (j < 0 || j >= board[i].length) continue;
            if (board[i][j] !== 'O') continue;
            board[i][j] = '-';
            q.push([i+1, j]);
            q.push([i-1, j]);
            q.push([i, j+1]);
            q.push([i, j-1]);
        }
    }
    
    for (var i = 0; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            if (i === 0 || i === m || j === 0 || j === n) {
                if (board[i][j] === 'O') markDash(i, j, board);
            }
        }
    }
    
    for (i = 0; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            if (board[i][j] === 'O') board[i][j] = 'X';
            if (board[i][j] === '-') board[i][j] = 'O';
        }
    }
};
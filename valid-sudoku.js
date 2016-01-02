/**
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var n = board.length;
    // row valid
    for (var i = 0; i < n; i++) {
        var seen = {};
        for (var j = 0; j < n; j++) {
            var token = board[i][j];
            if (token !== '.' && seen[token]) return false;
            seen[token] = true;
        }
    }
    
    // col valid
    for (j = 0; j < n; j++) {
        seen = {};
        for (i = 0; i < n; i++) {
            var token = board[i][j];
            if (token !== '.' && seen[token]) return false;
            seen[token] = true;
        }
    }
    
    for (i = 0; i < n; i += 3) {
        for (j = 0; j < n; j += 3) {
            seen = {};
            for (var r = i; r < i + 3; r++) {
                for (var c = j; c < j + 3; c++) {
                    var token = board[r][c];
                    if (token !== '.' && seen[token]) return false;
                    seen[token] = true;
                }
            }
        }
    }
    return true;
};
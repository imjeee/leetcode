/**
 * https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var left = n;
    var right = n;
    var soFar = '';
    var result = [];
    
    function gen(left, right, soFar, result) {
        if (left > right || left < 0) return;
        
        if (left === 0 && right === 0) {
            result.push(soFar);
        }

        gen(left-1, right, soFar + '(', result);
        gen(left, right-1, soFar + ')', result);
    }
    gen(left, right, soFar, result);
    return result;
};
/**
 * https://leetcode.com/problems/longest-valid-parentheses/
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var stack = [];
    var max = 0;
    var curr = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push([i, '(']);
        } else {
            if (stack.length === 0 || stack[stack.length-1][1] === ')') {
                stack.push([i, ')']);
            } else {
                stack.pop();
                curr = stack.length === 0 ? i + 1 : i - stack[stack.length-1][0];
                max = Math.max(max, curr);
            }
        }
    }
    return max;
};
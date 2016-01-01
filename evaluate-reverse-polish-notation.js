/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens === null || tokens.length === 0) return 0;
    var stack = [];
    tokens.forEach(function(token) {
	    if (isNaN(token)) {
		var lhs = stack.pop();
		var rhs = stack.pop();
		var formula = rhs + token + lhs;
		formula = formula.replace('--', '+');
		token = Math.trunc(eval(formula));
	    }
	    stack.push(token);
	})
    return Number(stack.pop());
}
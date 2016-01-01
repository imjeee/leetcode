/**
 * https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1;
    var result = '';
    for (var i = digits.length-1; i >= 0; i--) {
        var num = digits[i] + carry;
        var curr = num < 10 ? num : 0;
        carry = num < 10 ? 0 : 1;
        result += curr;
    }
    if (carry === 1) result += 1;
    return result.split('').reverse().map(function(n) {
	    return Number(n);
	})
};
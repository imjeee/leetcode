/**
 * https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var seen = {};
    while(n !== 1) {
        seen[n] = true;
        var numbers = (n + '').split('');
        n = numbers.map(function(n, i) {
		return Number(n)*Number(n);
	    }).reduce(function(prev, curr) {
		    return prev + curr;
		});
        if (seen[n]) return false;
    }
    return true;
};
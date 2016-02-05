/**
 * https://leetcode.com/problems/bitwise-and-of-numbers-range/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    while(n > m) n &= n-1;
    return n;
};
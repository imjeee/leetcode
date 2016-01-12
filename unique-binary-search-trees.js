/**
 * https://leetcode.com/problems/unique-binary-search-trees/
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var count = [1,1];
    for (var i = 2; i <= n; i++) {
        count[i] = 0;
        for (var j = 0; j < i; j++) {
            count[i] += count[j]*count[i-j-1];
        }
    }
    return count[n];
};
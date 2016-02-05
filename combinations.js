/**
 * https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var curr = [];
    var result = []
    function helper(n, k, start, curr, result) {
        if (k === 0) {
            result.push(curr.slice());
            return;
        }
        for (var i = start; i <= n; i++) {
            curr.push(i);
            helper(n, k-1, i+1, curr, result);
            curr.pop();
        }
    }
    helper(n, k, 1, curr, result);
    return result;
};

/**
 * https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var i = 1;
    var result = [];
    var curr = [];

    function comb(i, n, k, curr, result) {
        if (k === 0) {
            result.push(curr.slice());
            return;
        }
        if (n-i+1 < k) return;
        while(i <= n) {
            curr.push(i);
            comb(i+1, n, k-1, curr, result);
            curr.pop();
            i++;
        }
    }
    comb(i, n, k, curr, result);
    return result;
}
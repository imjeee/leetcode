/**
 * https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    var soFar = [];
    candidates.sort(function(a,b) { return a-b; })
    
    function comb(candidates, target, start, soFar, result) {
        if (target < 0 || candidates.length === 0) return;
        if (target === 0) {
            result.push(soFar.slice());
            return;
        }
        for (var i = start; i < candidates.length; i++) {
            // with candidates[i]
            soFar.push(candidates[i]);
            comb(candidates, target - candidates[i], i, soFar, result);
            soFar.pop();
        }
    }
    comb(candidates, target, 0, soFar, result);
    return result;
};

/**
 * https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort(function(a,b) { return a-b; })
    var result = [];
    var pos = 0;
    var curr = [];
    
    function combine(candidates, target, pos, curr, result) {
        if (target === 0) {
            result.push(curr.slice());
        } else {
            while(pos < candidates.length) {
                if (candidates[pos] > target) return;
                curr.push(candidates[pos]);
                combine(candidates, target-candidates[pos], pos, curr, result);
                curr.pop();
                pos++;
            }
        }
    }
    
    combine(candidates, target, pos, curr, result);
    return result;
};
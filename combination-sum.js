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
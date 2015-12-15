/**
 * https://leetcode.com/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var result = [];
    var curr = [];
    var pos = 0;
    candidates.sort(function(a,b) { return a - b; });
    
    function combine(candidates, target, pos, result, curr) {
        if (target === 0) {
            result.push(curr.slice());
            return;
        }
        while(pos < candidates.length) {
            if (candidates[pos] > target) return;
            curr.push(candidates[pos]);
            combine(candidates, target-candidates[pos], pos+1, result, curr);
            curr.pop();

            while(pos+1 < candidates.length && candidates[pos+1] === candidates[pos])
                pos++;
            pos++;
        }
    }
    combine(candidates, target, pos, result, curr);
    return result;
};
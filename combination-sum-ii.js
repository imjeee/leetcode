/**
 * https://leetcode.com/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort(function(a,b) { return a-b; })
    var curr = [];
    var result = [];
    
    function comb(candidates, target, start, curr, result) {
        if (target === 0) {
            result.push(curr.slice());
            return;
        }
        
        if (target < 0 || start >= candidates.length) return;
        
        for (var i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i-1]) continue;
            var n = candidates[i];
            curr.push(n);
            comb(candidates, target-n, i+1, curr, result);
            curr.pop();
        }
    }
    comb(candidates, target, 0, curr, result);
    return result;
};

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
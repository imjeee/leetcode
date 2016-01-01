/**
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort(function(a,b) { return a-b; });
    
    var start = 0;
    var sol = [];
    var result = [sol];

    subs(nums, start, sol, result);

    function subs(nums, start, sol, result) {
        for (var i = start; i < nums.length; i++) {
            sol.push(nums[i]);
            result.push(sol.slice())
            subs(nums, i+1, sol, result);
            sol.pop();
        }
    }
    
    return result;
};
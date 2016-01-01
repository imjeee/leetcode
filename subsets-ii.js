/**
 * https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort(function(a,b) { return a-b; });
    
    var start = 0;
    var sol = [];
    var result = [sol];

    subs(nums, start, sol, result);

    function subs(nums, start, sol, result) {
        for (var i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i-1]) continue;
            sol.push(nums[i]);
            result.push(sol.slice())
            subs(nums, i+1, sol, result);
            sol.pop();
        }
    }
    
    return result;
};
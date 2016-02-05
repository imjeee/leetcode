/**
 * https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums === null || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var curr = nums[i];
        var prev = i > 0 ? result[i-1] : 0;
        var pprev = i > 1 ? result[i-2] : 0;
        result.push(Math.max(curr + pprev, prev));
    }
    
    return result[result.length-1];
};
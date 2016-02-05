/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums === null || nums.length === 0) return 0;
    
    var sum = nums[0];
    var max = sum;
    
    for (var i = 1; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        max = Math.max(sum, max);
        sum = sum > 0 ? sum : 0;
    }
    return max;
};
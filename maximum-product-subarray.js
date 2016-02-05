/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums === null || nums.length === 0) return 0;
    var max = nums[0];
    var min = nums[0];
    var result = max;
    for (var i = 1; i < nums.length; i++) {
        var preMax = max;
        max = Math.max(nums[i], nums[i]*preMax, nums[i]*min);
        min = Math.min(nums[i], nums[i]*preMax, nums[i]*min);
        result = Math.max(max, result);
    }
    return result;
};
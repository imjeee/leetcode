/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums === null || nums.length < 2) return nums;
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        result.push(1);
    }
    for (i = nums.length-2; i >= 0; i--) {
        result[i] = result[i+1] * nums[i+1];
    }
    var left = 1;
    for (i = 0; i < nums.length; i++) {
        result[i] = left * result[i];
        left *= nums[i];
    }
    return result;
};
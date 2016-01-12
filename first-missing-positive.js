/**
 * https://leetcode.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.unshift(0);
    for (var i = 1; i < nums.length; i++) {
        while(nums[i] !== i) {
            var num = nums[i];
            if (nums[num] === num) break;
            if (num <= 0 || num >= nums.length) break;
            nums[i] = nums[num];
            nums[num] = num;
        }
    }
    
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
    return nums.length;
};
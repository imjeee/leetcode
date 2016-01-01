/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (nums === null || nums.length === 0) return 0;
    
    var left = 0;
    var right = 0;
    var total = nums[0];
    var min = Infinity;
    
    while(left < nums.length && right < nums.length) {
        if (left === right) {
            if (total >= s) return 1;
            right++;
            if (right < nums.length) total += nums[right];
        } else {
            if (total >= s) {
                min = Math.min(min, right - left + 1);
                total -= nums[left];
                left++;
            } else {
                right++;
                if (right < nums.length) total += nums[right];
            }
        }
    }
    min = min === Infinity ? 0 : min;
    return min;
};
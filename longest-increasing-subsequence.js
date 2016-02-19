/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length < 2) return nums.length;
    var max = 1;
    
    var memoize = [1];
    for (var i = 1; i < nums.length; i++) {
        memoize[i] = 1;
        for (var j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                memoize[i] = Math.max(memoize[i], memoize[j]+1);
                max = Math.max(memoize[i], max);
            }
        }
    }
    
    return max;
};
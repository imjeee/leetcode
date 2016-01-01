/**
 * https://leetcode.com/problems/contains-duplicate-iii/
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length && j < i + k + 1; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) return true;
        }
    }
    return false;
};
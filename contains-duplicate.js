/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var seen = {};
    for (var i = 0; i < nums.length; i++) {
        if (seen[nums[i]] !== undefined) return true;
        seen[nums[i]] = true;
    }
    return false;
};
/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (map[target - num] !== undefined) return [map[target - num]+1, i+1];
        map[num] = i;
    }
    return []
};
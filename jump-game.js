/**
 * https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var reach = 0;
    for (var i = 0; i < nums.length && i <= reach; i++) {
        reach = Math.max(nums[i] + i, reach);
    }
    return reach >= nums.length-1;
};
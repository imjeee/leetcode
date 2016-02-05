/**
 * https://leetcode.com/problems/jump-game-ii/
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var reach = 0;
    var lastReach = 0;
    var step = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i > lastReach) {
            step++;
            lastReach = reach;
        }
        reach = Math.max(nums[i] + i, reach);
    }
    return step;
};
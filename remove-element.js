/**
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    var runner = 0;
    while(runner < nums.length) {
        if (nums[runner] !== val) {
            nums[i] = nums[runner];
            i++;
        }
        runner++;
    }
    return i;
};
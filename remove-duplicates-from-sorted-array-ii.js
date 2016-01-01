/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 0;
    var runner = 0;
    while(runner < nums.length) {
        if (runner === 0 || nums[runner] !== nums[runner-1]) {
            nums[i] = nums[runner];
            i++;
            if (runner + 1 < nums.length && nums[runner] === nums[runner + 1]) {
                runner++;
                nums[i] = nums[runner];
                i++;
            }
        }
        runner++;
    }
    return i;
};
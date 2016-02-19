/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var sm = nums[0];
    var md = null;
    for (var i = 1; i < nums.length; i++) {
        if (md !== null) {
            if (nums[i] > md) return true;
            if (nums[i] > sm) {
                md = nums[i];
            } else {
                sm = nums[i];
            }
        } else { // md === null
            if (nums[i] < sm) {
                sm = nums[i];
            } else if (nums[i] > sm) {
                md = nums[i];
            }
        }
    }
    return false;
};
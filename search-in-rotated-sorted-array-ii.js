/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var low = 0;
    var high = nums.length-1;
    while(low <= high) {
        var mid = Math.floor((low + high)/2);
        if (nums[mid] === target) return true;
        if (nums[mid] < nums[high]) { // right half sorted
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else if (nums[mid] > nums[high]) { // left half sorted
            if (target < nums[mid] && target >= nums[low]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            high--;
        }
    }
    return false;
};
/**
 * https://leetcode.com/problems/find-peak-element/
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var low = 0;
    var high = nums.length-1;
    while(low <= high) {
        var mid = Math.floor((low + high)/2);
        if ((mid === 0 || nums[mid] > nums[mid-1]) && (mid === nums.length-1 || nums[mid] > nums[mid+1])) {
            return mid;
        } else if (mid > 0 && nums[mid-1] > nums[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};
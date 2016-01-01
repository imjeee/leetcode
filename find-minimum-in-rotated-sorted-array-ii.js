/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    function findMin2(low, high, nums) {
        if (low > high) return Infinity;
        if (low === high) return nums[low];
        if (nums[low] < nums[high]) return nums[low];
        var mid = Math.floor((low + high)/2);
        if (nums[mid] > nums[high]) return findMin2(mid+1, high, nums);
        if (nums[mid] < nums[high]) return findMin2(low, mid, nums);
        return Math.min(findMin2(low, mid, nums), findMin2(mid+1, high, nums));
    }
    
    return findMin2(0, nums.length-1, nums);
};
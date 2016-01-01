/**
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums === null || nums.length < 2) return;
    var rotateAmount = nums.length - k%nums.length;
    if (rotateAmount === 0) return;
    
    function reverse(start, end, nums) {
        while(start < end) {
            var tmp = nums[start];
            nums[start] = nums[end];
            nums[end] = tmp;
            start++;
            end--;
        }
    }
    
    reverse(0, rotateAmount-1, nums);
    reverse(rotateAmount, nums.length-1, nums);
    reverse(0, nums.length-1, nums);
}
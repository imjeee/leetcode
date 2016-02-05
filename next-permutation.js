/**
 * https://leetcode.com/problems/next-permutation/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    function reverse(i, j, nums) {
        while(i < j) {
            tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            i++;
            j--;
        }
    }
    
    var p = -1;
    
    for (var i = nums.length-1; i >= 0; i--) {
        if (i !== nums.length-1 && nums[i] < nums[i+1]) {
            p = i;
            break;
        }
    }
    
    if (p === -1) {
        reverse(0, nums.length-1, nums);
        return;
    } 
    
    var q = -1;
    for (var j = nums.length-1; j >= 0; j--) {
        if (nums[j] > nums[p]) {
            q = j;
            break;
        }
    }
    
    var tmp = nums[p];
    nums[p] = nums[q];
    nums[q] = tmp;
    
    reverse(p+1, nums.length-1, nums);
};
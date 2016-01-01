/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums === null || nums.length < 3) return [];
    
    nums.sort(function(a,b) { return a - b; });
    
    var result = [];
    
    for (var i = 0; i < nums.length-2; i++) {
        if (i !== 0 && nums[i] === nums[i-1]) continue;
        
        var num = nums[i];
        var left = i+1;
        var right = nums.length-1;
        
        while(left < right) {
            
            var leftNum = nums[left];
            var rightNum = nums[right];
            var total = num + leftNum + rightNum;
            
            if (total === 0) {
                result.push([num, leftNum, rightNum]);
                while(left < nums.length && nums[left] === leftNum) left++;
                while(right > 0 && nums[right] === rightNum) right--;
            } else if (total > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};
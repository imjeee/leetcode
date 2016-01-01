/**
 * https://leetcode.com/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a,b) { return a-b; });
    
    var result = [];
    
    for (var i = 0; i < nums.length-3; i++) {
        if (i !== 0 && nums[i] === nums[i-1]) continue;
        for (var j = i+1; j < nums.length-2; j++) {
            if (j !== i+1 && nums[j] === nums[j-1]) continue;
            var left = j+1;
            var right = nums.length-1;
            while(left < right) {
                var num1 = nums[i];
                var num2 = nums[j];
                var num3 = nums[left];
                var num4 = nums[right];
                var total = num1 + num2 + num3 + num4;
                if (total === target) {
                    result.push([num1, num2, num3, num4]);
                    left++;
                    right--;
                } else if (total < target) {
                    left++;
                } else {
                    right--;
                }
                while (left !== j+1 && nums[left] === nums[left-1]) left++;
                while (right !== nums.length-1 && nums[right] === nums[right+1]) right--;
            }
        }
    }
    return result;
};
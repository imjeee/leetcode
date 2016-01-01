/**
 * https://leetcode.com/problems/3sum-closest/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var result = Infinity;
    nums.sort(function(a,b) { return a-b; });
    
    for (var i = 0; i < nums.length-2; i++) {
        var left = i+1;
        var right = nums.length-1;
        while(left < right) {
            var n = nums[i];
            var l = nums[left];
            var r = nums[right];
            var total = n + l + r;
            if (Math.abs(total - target) < Math.abs(result - target)) result = total;
            if (total > target)
                right--
		else
		    left++;
        }
    }
    return result;
};
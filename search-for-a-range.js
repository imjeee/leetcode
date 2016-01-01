/**
 * https://leetcode.com/problems/search-for-a-range/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var pos = (function(nums, target) {
	    var low = 0;
	    var high = nums.length-1;
	    while(low <= high) {
		var mid = Math.floor((low + high)/2);
		if (nums[mid] === target) return mid;
		if (nums[mid] > target) high = mid - 1;
		if (nums[mid] < target) low = mid + 1;
	    }
	    return -1;
	}(nums, target));
    
    if (pos === -1) return [-1,-1];
    
    var upper = (function(nums, target, low) {
	    var high = nums.length-1;
	    while(low <= high) {
		var mid = Math.ceil((low + high)/2);
		if (nums[mid] === target) low = mid + 1;
		if (nums[mid] > target) high = mid - 1;
	    }
	    return low - 1;
	}(nums, target, pos));
    
    var lower = (function(nums, target, high) {
	    var low = 0;
	    while(low <= high) {
		var mid = Math.floor((low + high)/2);
		if (nums[mid] === target) high = mid - 1;
		if (nums[mid] < target) low = mid + 1;
	    }
	    return high + 1;
	}(nums, target, pos));
    
    return [lower, upper];
};
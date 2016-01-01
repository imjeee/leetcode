/**
 * https://leetcode.com/problems/largest-number/
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(function(a,b) {
	    return Number(b + '' + a) - Number(a + '' + b);
	});
    
    while(nums.length > 1 && nums[0] === 0) nums.shift();
    
    return nums.join('');
};
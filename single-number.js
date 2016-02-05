/**
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = 0;
    nums.forEach(function(num) {
	    result ^= num;
	});
    return result;
};
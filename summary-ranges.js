/**
 * https://leetcode.com/problems/summary-ranges/
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums === null || nums.length === 0) return [];
    var result = [];
    var start = nums[0];
    
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] - 1 !== nums[i-1]) {
            result.push(start + '->' + nums[i-1]);
            start = nums[i];
        }   
    }
    
    result.push(start + '->' + nums[nums.length-1]);
    
    for (i = 0; i < result.length; i++) {
        if (result[i].split('->')[0] === result[i].split('->')[1]) {
            result[i] = result[i].split('->')[0];
        }
    }
    
    return result;
};
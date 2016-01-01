/**
 * https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var bucket = [];
    nums.forEach(function(num) {
	    if (bucket.length === 0) {
		bucket.push([num, 1]);
	    } else if (bucket.length === 1) {
		if (bucket[0][0] === num) {
		    bucket[0][1]++;
		} else {
		    bucket[0][1]--;
		}
	    }
	    if (bucket[0][1] === 0) {
		bucket.pop();
	    }
	})
    return bucket[0][0];
};
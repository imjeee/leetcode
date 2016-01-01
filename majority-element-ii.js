/**
 * https://leetcode.com/problems/majority-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var bucket = {size:0,nums:{}};
    nums.forEach(function(num) {
	    if (bucket.nums[num] !== undefined) {
		bucket.nums[num]++;
	    } else {
		if (bucket.size < 2) {
		    bucket.nums[num] = 1;
		    bucket.size++;
		} else {
		    for (var key in bucket.nums) {
			bucket.nums[key]--;
			if (bucket.nums[key] === 0) {
			    bucket.size--;
			    delete bucket.nums.key;
			}
		    }
		}
	    }
	});

    var result = [];
    for (var key in bucket.nums) {
        var total = 0;
        nums.forEach(function(num) {
		if (num === Number(key)) total++;
	    })
	    if (total > Math.floor(nums.length/3)) result.push(Number(key));
    }
    return result;
};
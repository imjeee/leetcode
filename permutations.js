/**
 * https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [[]];
    for (var i = 0; i < nums.length; i++) {
        var newResult = [];
        for (var j = 0; j < result.length; j++) {
            for (var k = 0; k <= result[j].length; k++) {
                var tmp = result[j].slice();
                tmp.splice(k, 0, nums[i]);
                newResult.push(tmp);
            }
        }
        result = newResult;
    }
    return result;
};

/**
 * https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    var result = [];
    var tmp = [];
    
    function permu(nums, tmp, result) {
        if (nums.length === 0) {
            result.push(tmp.slice());
            return;
        }
        
        for (var i = 0; i < nums.length; i++) {
            var num = nums.splice(i, 1)[0];
            tmp.push(num);
            permu(nums, tmp, result);
            tmp.pop();
            nums.splice(i, 0, num);
        }
    }
    
    permu(nums, tmp, result);
    
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums == null || nums.length == 0)
        return [[]];
    if (nums.length == 1)
        return [nums];
    

    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var element = nums[i];
        var newNums = nums.filter(function(i) {
		return i != element;
	    });
        var tmpResult = permute(newNums);
        tmpResult.map(function(tmp) {
		tmp.push(element);
	    })
	    result = result.concat(tmpResult);
    }
    
    return result;
};
/**
 * https://leetcode.com/problems/house-robber-ii/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums === null) return 0;
    if (nums.length === 1) return nums[0];
    
    function robHelp(nums) {
        var result = [];
        for (var i = 0; i < nums.length; i++) {
            var curr = nums[i];
            var prev = i > 0 ? result[i-1] : 0;
            var pprev = i > 1 ? result[i-2] : 0;
            result.push(Math.max(curr + pprev, prev));
        }
        return result[result.length-1];
    }
    
    var start = nums[0];
    var end = nums[nums.length-1];
    nums[0] = 0;
    var r1 = robHelp(nums);

    nums[0] = start;
    nums[nums.length-1] = 0;
    var r2 = robHelp(nums);
    nums[nums.length-1] = end;

    return Math.max(r1, r2);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    
    var withoutLast = [];
    var max1 = findMax(nums.slice(0, nums.length-1));
    var max2 = findMax(nums.slice(1, nums.length));

    function findMax(nums) {
        var result = 0;
        for (var i = 0; i < nums.length; i++) {
            var prev = i-1 >= 0 ? nums[i-1] : 0;
            var pprev = i-2 >= 0 ? nums[i-2] : 0;
            var ppprev = i-3 >= 0 ? nums[i-3] : 0;
            nums[i] = Math.max(prev, pprev + nums[i], ppprev + nums[i]);
            result = nums[i];
        }
        return result;
    }
    
    return Math.max(max1, max2);
};
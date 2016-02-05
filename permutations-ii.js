/**
 * https://leetcode.com/problems/permutations-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 0) return [[]];
    
    var result = [];
    var seen = {}
    for (var i = 0; i < nums.length; i++) {
        if (seen[nums[i]] === undefined) {
            var num = nums.splice(i, 1)[0];
            var lists = permuteUnique(nums);
            nums.splice(i, 0, num);
            for (var j = 0; j < lists.length; j++) {
                lists[j].push(num);
                result.push(lists[j]);
            }
        }
        seen[nums[i]] = true;
    }
    return result;
};

/**
 * https://leetcode.com/problems/permutations-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var soFar = [];
    var result = [];
    
    function permu(nums, soFar, result) {
        if (nums.length === 0) {
            result.push(soFar.slice());
            return;
        }
        
        var seen = {};
        for (var i = 0; i < nums.length; i++) {
            if (seen[nums[i]] === undefined) {
                var n = nums.splice(i, 1)[0];
                soFar.push(n);
                permu(nums, soFar, result);
                soFar.pop();
                nums.splice(i, 0, n);
            }
            seen[nums[i]] = true;
        }
    }
    permu(nums, soFar, result);
    return result;
};
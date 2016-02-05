/**
 * https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort(function(a,b) { return a - b; });
    
    var seen = {};
    var result = [[]];
    
    for (var i = 0; i < nums.length; i++) {
        var newList = [];
        for (var j = 0; j < result.length; j++) {
            var tmp = result[j].slice();
            tmp.push(nums[i]);
            var key = tmp.join('');
            if (seen[key] === undefined) {
                newList.push(tmp);
                seen[key] = true;
            }
        }
        result = result.concat(newList);
    }
    return result;
};

/**
 * https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort(function(a,b) { return a-b; });
    
    var start = 0;
    var sol = [];
    var result = [sol];

    subs(nums, start, sol, result);

    function subs(nums, start, sol, result) {
        for (var i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i-1]) continue;
            sol.push(nums[i]);
            result.push(sol.slice())
            subs(nums, i+1, sol, result);
            sol.pop();
        }
    }
    
    return result;
};
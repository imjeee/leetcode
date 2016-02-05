/**
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort(function(a,b) { return a-b; });
    
    var result = [[]];

    for (var i = 0; i < nums.length; i++) {
        var newList = [];
        for (var j = 0; j < result.length; j++) {
            var tmp = result[j].slice();
            tmp.push(nums[i]);
            newList.push(tmp);
        }
        result = result.concat(newList);
    }
    
    return result;
};

/**
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort(function(a,b) { return a-b; });
    
    var result = [];
    var curr = [];
    
    function nchoosek(n, k, start, curr, result) {
        if (k === 0) {
            result.push(curr.slice());
            return;
        }
        
        for (var i = start; i < n; i++) {
            curr.push(nums[i]);
            nchoosek(n, k-1, i+1, curr, result);
            curr.pop();
        }
    }
    
    for (var i = 0; i <= nums.length; i++) {
        nchoosek(nums.length, i, 0, curr, result);
    }
    
    return result;
};

/**
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort(function(a,b) { return a-b; });
    
    var start = 0;
    var sol = [];
    var result = [sol];

    subs(nums, start, sol, result);

    function subs(nums, start, sol, result) {
        for (var i = start; i < nums.length; i++) {
            sol.push(nums[i]);
            result.push(sol.slice())
            subs(nums, i+1, sol, result);
            sol.pop();
        }
    }
    
    return result;
};
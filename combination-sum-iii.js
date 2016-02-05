/**
 * https://leetcode.com/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var curr = [];
    var result = [];
    
    function comb(k, n, start, curr, result) {
        if (k === 0) {
            if (n === 0) result.push(curr.slice());
            return;
        }
        
        for (var i = start; i <= 9; i++) {
            curr.push(i);
            comb(k-1,n-i,i+1,curr,result);
            curr.pop();
        }
    }
    comb(k,n,1,curr,result);
    return result;
};

/**
 * https://leetcode.com/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var result = [];
    var curr = [];
    var pos = 1;
    var total = 0;
    
    function combine(n, k, pos, total, curr, result) {
        if (k === 0) {
            if (total === n) result.push(curr.slice());
            return;
        }
        
        while(pos <= 9) {
            if (total + pos > n) return;
            
            curr.push(pos);
            combine(n, k-1, pos+1, total+pos, curr, result);
            curr.pop();
            pos++;
        }
    }
    combine(n, k, pos, total, curr, result);
    return result;
};


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    function helper(k, n, t) {
        if (k == 0 || t > n || t > 9)
            return [];
        if (k == 1 && n-t == 0)
            return [[t]];

        // choose k
        var result = helper(k-1,n-t,t+1);
        for (var i = 0; i < result.length; i++) {
            result[i].unshift(t);
        }

        // not choose k
        result = result.concat(helper(k,n,t+1))
        return result;
    }
    
    return helper(k,n,1);
};
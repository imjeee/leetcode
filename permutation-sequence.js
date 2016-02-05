/**
 * https://leetcode.com/problems/permutation-sequence/
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var list = [];
    for (var i = 1; i <= n; i++) {
        list.push(i);
    }
    var facts = [1, 1, 2];
    for (i = 3; i < n; i++) {
        facts[i] = i * facts[i-1];
    }
    
    function getPerm(list, k) {
        if (list.length === 0) return [];
        if (list.length === 1) return [list[0]];
        for (var i = 0; i < list.length; i++) {
            if (k > facts[list.length-1]) {
                k -= facts[list.length-1];
                continue;
            }
            var num = list.splice(i, 1)[0];
            var rest = getPerm(list, k);
            rest.unshift(num);
            return rest;
        }
    }
    
    return getPerm(list, k).join('');
};
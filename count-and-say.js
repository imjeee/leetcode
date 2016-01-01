/**
 * https://leetcode.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var result = '1';
    if (n === 1) return result;
    
    for (var i = 1; i < n; i++) {
        var newResult = '';
        var key = result[0];
        var count = 1;
        for (var j = 1; j < result.length; j++) {
            if (key !== result[j]) {
                newResult += count + key;
                key = result[j];
                count = 0;
            }
            count++;
        }
        newResult += count + key;
        result = newResult;
    }
    
    return result;
};
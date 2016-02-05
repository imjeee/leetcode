/**
 * doesn't pass corner integer cases
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var neg = false;
    if (x < 0) {
        x = -x;
        neg = true;
    }
    
    var result = 0;
    
    while(x !== 0) {
        result *= 10;
        result += x%10;
        x = Math.floor(x/10);
    }
    
    if (neg) result = -result;
    return result;
};
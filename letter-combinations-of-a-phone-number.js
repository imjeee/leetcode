/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === null || digits.length === 0) return [];
    
    var map = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz',
        0:' '
    }
    
    function combine(digits) {
        if (digits.length === 0) return [''];
        
        var num = digits[0];
        digits = digits.substring(1);
        
        var result = [];
        var list = combine(digits);
        
        for (var i = 0; i < map[Number(num)].length; i++) {
            for (var j = 0; j < list.length; j++) {
                result.push(map[Number(num)][i] + list[j]);
            }
        }
        return result;
    }
    
    return combine(digits);
};
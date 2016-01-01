/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var open = '({[';
    var map = {
        '(':')',
        '{':'}',
        '[':']'
    }
    for (var i = 0; i < s.length; i++) {
        var char1 = s[i];
        if (open.indexOf(char1) > -1) {
            stack.push(char1);
        } else {
            if (stack.length === 0)
                return false;
            var char2 = stack.pop();
            if (map[char2] !== char1)
                return false;
        }
    }
    return stack.length === 0;
};
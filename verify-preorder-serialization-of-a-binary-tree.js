/**
 * https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    var arr = preorder.split(',');
    var stack = [];
    for (var i = 0; i < arr.length; i++) {
        if (i !== 0 && stack.length === 0) return false;
        if (arr[i] === '#') {
            while(stack.length > 0 && stack[stack.length-1][1] === 1) {
                stack.pop();
            }
            if (stack.length > 0) {
                stack[stack.length-1][1]--;
                if (stack[stack.length-1][1] === 0) stack.pop();
            }
        } else {
            stack.push([arr[i], 2]);
        }
    }
    return stack.length === 0;
};
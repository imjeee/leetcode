/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
    var max = 0;
    var stack = [];
    height.push(0);
    for (var i = 0; i < height.length; i++) {
        if (stack.length === 0 || height[i] >= stack[stack.length-1][0]) {
            stack.push([height[i], i]);
        } else {
            var h = stack.pop()[0];
            var w = stack.length === 0 ? i : i - 1 - stack[stack.length-1][1];
            max = Math.max(max, h*w);
            i--;
        }
    }
    return max;
};
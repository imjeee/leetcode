/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0;
    var right = height.length-1;
    var most = 0;
    
    while(left < right) {
        var contains = (right - left) * Math.min(height[left], height[right]);
        most = Math.max(most, contains);
        height[left] < height[right] ? left++ : right--;
    }
    
    return most;
};
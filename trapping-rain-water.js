/**
 * https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length < 3) return 0;
    
    var maxHeight = [height[0]];
    var total = 0;
    
    for (var i = 1; i < height.length; i++) {
        maxHeight[i] = Math.max(maxHeight[i-1], height[i]);
    }
    
    maxHeight[maxHeight.length-1] = height[height.length-1];
    
    for (i = maxHeight.length-2; i > 0; i--) {
        var accu = Math.min(maxHeight[i-1], maxHeight[i+1]) - height[i];
        total += accu > 0 ? accu : 0;
        maxHeight[i] = Math.max(maxHeight[i+1], height[i]);
    }
    
    return total;
};
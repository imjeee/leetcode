/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null || prices.length < 2) return 0;
    
    var left = [0];
    var low = prices[0];
    var max = 0;
    for (var i = 1; i < prices.length; i++) {
        max = Math.max(prices[i] - low, max);
        left.push(max);
        low = Math.min(prices[i], low);
    }
    
    var rightMax = 0;
    var high = prices[prices.length-1];

    for (i = prices.length-2; i >= 0; i--) {
        rightMax = Math.max(high - prices[i], rightMax);
        high = Math.max(prices[i], high);
        var leftMax = i > 0 ? left[i-1] : 0;
        max = Math.max(leftMax + rightMax, max);
    }
    
    return max;
};
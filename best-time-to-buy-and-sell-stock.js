/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null || prices.length < 2) return 0;
    
    var profit = 0;
    var low = prices[0];
    for (var i = 1; i < prices.length; i++) {
        profit = Math.max(prices[i] - low, profit);
        low = Math.min(prices[i], low);
    }
    
    return profit;
};
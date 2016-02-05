/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null || prices.length < 2) return 0;
    
    var profit = 0;
    var low = prices[0];
    
    for (var i = 1; i < prices.length; i++) {
        profit += prices[i] > low ? prices[i]-low : 0;
        low = prices[i];
    }
    
    return profit;
};
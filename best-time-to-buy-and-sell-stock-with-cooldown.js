/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null || prices.length < 2) return 0;
    
    function prevHigh(i) {
        if (i >= 0) return profit[i];
        return 0;
    }
    
    function maxProfitHere(i) {
        var highest = 0;
        var highestPrice = prices[i--];
        while(i >= 0) {
            var pHigh = prevHigh(i-2);
            var profitHere = highestPrice - prices[i];
            highest = Math.max(profitHere + pHigh, highest);
            i--;
        }
        return highest;
    }
    
    var profit = [0];
    for (var i = 1; i < prices.length; i++) {
        profit.push(Math.max(maxProfitHere(i), profit[i-1]));
    }
    return profit[profit.length-1];
};
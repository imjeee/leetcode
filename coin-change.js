/**
 * https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var dp = [0];
    for (var i = 0; i <= amount; i++) {
        for (var j = 0; j < coins.length; j++) {
            if (dp[i] !== undefined) {
                var coin = coins[j];
                var nextDpPos = i + coin;
                if (dp[nextDpPos] === undefined) {
                    dp[nextDpPos] = dp[i] + 1;
                } else {
                    dp[nextDpPos] = Math.min(dp[nextDpPos], dp[i] + 1);
                }
            }
        }
    }
    
    if (dp[amount] !== undefined) return dp[amount];
    return -1;
};
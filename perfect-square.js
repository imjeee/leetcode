/**
 * https://leetcode.com/problems/perfect-squares/
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var dp = [0];
    var sn = Math.floor(Math.sqrt(n));
    for (var i = 0; i <= n; i++) {
        for (var j = 1; i+j*j <= n; j++) {
            if (dp[i] !== undefined) {
                var nextPos = i + j*j;
                if (dp[nextPos] === undefined) {
                    dp[nextPos] = dp[i] + 1;   
                } else {
                    dp[nextPos] = Math.min(dp[nextPos], dp[i] + 1);
                }
            }
        }
    }
    return dp[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    while (n % 4 === 0)
        n /= 4;
    if (n % 8 === 7)
        return 4;
    for (var a = 0; a*a<=n; ++a) {
        var b = Math.floor(Math.sqrt(n - a*a));
        if (a*a + b*b === n)
            return !!a + !!b;
    }
    return 3;
};
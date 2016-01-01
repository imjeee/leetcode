/**
 * https://leetcode.com/problems/count-primes/
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 2) return 0;
    var primes = [];
    var count = 0;
    
    function divisibleByPrimes(primes, n) {
        for (var i = 0; i < primes.length; i++) {
            if (primes[i] * primes[i] > n) return false;
            if (n%primes[i] === 0) return true;
        }
        return false;
    }
    
    for (var i = 2; i < n; i++) {
        if (!divisibleByPrimes(primes, i)) {
            count++;
            primes.push(i);
        }
    }
    
    return count;
};
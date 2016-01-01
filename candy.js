/**
 * https://leetcode.com/problems/candy/
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if (ratings.length === 0) return 0;
    
    var candies = [1];
    for (var i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            candies.push(candies[i-1] + 1);
        } else {
            candies.push(1);
        }
    };
    
    for (i = candies.length-2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) {
            if (candies[i] <= candies[i+1])
                candies[i] = candies[i+1] + 1;
        }
    }
    
    return candies.reduce(function(prev, curr) {
	    return prev + curr;
	});
};
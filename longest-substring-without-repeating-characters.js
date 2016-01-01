/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var curr = 0;
    var contain = {};
    var trailer = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (contain[s[i]] === undefined) {
            contain[s[i]] = i;
            curr++;
        } else {
            var trailer = Math.max(contain[s[i]], trailer);
            curr = i - trailer;
            contain[s[i]] = i;
        }
        max = Math.max(curr, max);
    }
    
    return max;
};
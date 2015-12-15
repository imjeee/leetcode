/**
 * https://leetcode.com/problems/restore-ip-addresses/
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s.length > 12) return [];
    
    var result = [];
    var curr = [];
    var count = 0;
    
    function restore(s, count, curr, result) {
        if (count === 4 && s.length === 0) {
            var valid = curr.every(function(ip) {
		    return (ip === '0' || ip[0] !== '0') && Number(ip) <= 255;
		})
		if (valid) result.push(curr.slice().join('.'));
            return;
        }
        
        for(var i = 1; i <= 3 && i <= s.length; i++) {
            var num = s.substring(0, i);
            curr.push(num);
            restore(s.substring(i), count+1, curr, result);
            curr.pop();
        }
    }
    
    restore(s, count, curr, result);
    return result;
};
/**
 * https://leetcode.com/problems/palindrome-partitioning/
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if (s === null) return null;
    if (s.length <= 1) {
        return [[s]];
    }

    function isPali(s) {
        if (s.length === 0) return false;
        if (s.length === 1) return true;
        var i = 0;
        var j = s.length-1;
        while(i < j) {
            if (s[i++] !== s[j--]) return false
				       }
        return true;
    }

    function part(s) {
        if (s.length === 0) return [[]]
				if (s.length === 1) return [[s]];
        
        var result = [];
        for (var i = 1; i <= s.length; i++) {
            var pali = s.substring(0,i);
            if (isPali(pali)) {
                var rest = s.substring(i);
                var list = part(rest);
                if (list.length > 0) {
                    for (var j = 0; j < list.length; j++) {
                        list[j].unshift(pali);
                    }
                    result = result.concat(list);
                }
            }
        }
        return result;
    }
    
    return part(s);
};
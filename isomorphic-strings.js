/**
 * https://leetcode.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    
    var smap = {};
    var tmap = {};
    
    for (var i = 0; i < s.length; i++) {
        if (smap[s[i]] || tmap[t[i]]) {
            if (smap[s[i]] !== t[i]) return false;
            if (tmap[t[i]] !== s[i]) return false;
        }
        smap[s[i]] = t[i];
        tmap[t[i]] = s[i];
    }
    return true;
};
/**
 * https://leetcode.com/problems/word-break/
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var t = [true];
    for (var j = 0; j < s.length; j++) {
        t.push(false);
    }
    
    for (var i = 0; i < s.length; i++) {
        if (t[i] === false) continue;
        for (var word of wordDict.values()) {
            var end = i + word.length;
            if (end > s.length) continue;
            if (s.substring(i, end) === word) t[end] = true;
        }
    }
    return t[t.length-1];
};

/**
 * abbreviated version, we do not need to initialize the t table in javascript
 * https://leetcode.com/problems/word-break/
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var t = [true];
    
    for (var i = 0; i < s.length; i++) {
        if (t[i] === undefined) continue;
        for (var word of wordDict.values()) {
            var end = i + word.length;
            if (end > s.length) continue;
            if (s.substring(i, end) === word) t[end] = true;
        }
    }
    return t[s.length] === true;
};
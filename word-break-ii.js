/**
 * exceed time limit on input:
 * "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
 * ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
 * https://leetcode.com/problems/word-break-ii/
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    
    function getTable(s, wordDict) {
        var t = [[]];
        for (var i = 0; i < s.length; i++) {
            if (t[i] === undefined) continue;
            for (var word of wordDict.values()) {
                var end = i + word.length;
                if (end > s.length) continue;
                var posWord = s.substring(i, end);
                if (word === posWord) {
                    if (t[end] === undefined) t[end] = [];
                    t[end].push(word);
                }
            }
        }
        return t;
    }

    function getList(i, table) {
        if (i === 0) return [[]];
        var words = table[i];
        var result = [];
        for (var j = 0; j < words.length; j++) {
            var word = words[j];
            var list = getList(i - word.length, table);
            for (var k = 0; k < list.length; k++) {
                list[k].push(word);
                result.push(list[k]);
            }
        }
        return result;
    }
    
    function parseResult(list) {
        for (var i = 0; i < list.length; i++) {
            list[i] = list[i].join(' ');
        }
    }
    
    var table = getTable(s, wordDict);
    console.log(table)
    var result = getList(table.length-1, table);
    result = parseResult(result);
    
    return result;
};
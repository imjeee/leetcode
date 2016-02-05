/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var count = 0;
    var q = [beginWord, ','];
    var seen = {beginWord:true};
    var letters = 'qwertyuiopasdfghjklzxcvbnm';
    
    function findNewWordsOneLetterApart(word) {
        var list = [];
        for (var i = 0; i < word.length; i++) {
            for (var j = 0; j < letters.length; j++) {
                var possibleWord = word.substring(0,i) + letters[j] + word.substring(i+1);
                if (wordList.has(possibleWord)) {
                    list.push(possibleWord);
                }
            }
        }
        return list;
    }

    function addUnseenWordsToQ(q, newWords) {
        newWords.forEach(function(word) {
		if (seen[word] === undefined) {
		    q.push(word);
		    seen[word] = true;
		}
	    })
    }
    
    while(q.length > 0) {
        var token = q.shift();
        if (token === ',') {
            if (q.length > 0) q.push(',');
            count++;
        } else { // token is word
            if (token === endWord) return count + 1;
            var newWords = findNewWordsOneLetterApart(token);
            addUnseenWordsToQ(q, newWords);
        }
    }
    return 0;
};
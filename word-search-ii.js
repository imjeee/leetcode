/**
 * https://leetcode.com/problems/word-search-ii/
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 
var TrieNode = function(c) {
    this.c = c;
    this.children = {};
    this.isLeaf = false;
    this.word = null;
}

var Trie = function() {
    this.root = new TrieNode();
}
    
Trie.prototype.insert = function(word) {
    var children = this.root.children;
    var t;
    for (var i = 0; i < word.length; i++) {
	var c = word[i];
	if (children[c] !== undefined) {
	    t = children[c];
	} else {
	    t = new TrieNode(c);
	    children[c] = t;
	}
	children = t.children;
	if (i === word.length-1) t.isLeaf = true;
    }
}
    
Trie.prototype.prefix = function(word) {
    return this.searchWord(word) !== null;
}
    
Trie.prototype.exists = function(word) {
    var node = this.searchWord(word);
    return node !== null && node.isLeaf;
}
    
Trie.prototype.searchWord = function(word) {
    var children = this.root.children;
    for (var i = 0; i < word.length; i++) {
	var c = word[i];
	var t;
	if (children[c] !== undefined) {
	    t = children[c];
	    children = t.children;
	} else {
	    return null;
	}
	if (i === word.length-1) return t;
    }
}
    
var findWords = function(board, words) {
    if (board === null || board.length === 0) return;
    
    var trie = new Trie();
    for (var i = 0; i < words.length; i++) {
	trie.insert(words[i]);
    }
    
    var result = [];
    var seen = {};
    var dup = {};
    
    function dfs(board, str, i, j) {
	var m = board.length;
	var n = board[0].length;
	
	if (i < 0 || i >= m || j < 0 || j >= n) return;
        
	var key = '' + i + j;
	if (seen[key] === true) return;
        
	str += board[i][j];
	if (!trie.prefix(str)) return;
	if (trie.exists(str) && dup[str] === undefined) {
	    result.push(str);
	    dup[str] = true;
	}
        
	seen[key] = true;
	dfs(board, str, i+1, j);
	dfs(board, str, i-1, j);
	dfs(board, str, i, j+1);
	dfs(board, str, i, j-1);
	seen[key] = false;
    }
    
    for (var i = 0; i < board.length; i++) {
	for (var j = 0; j < board[i].length; j++) {
	    dfs(board, '', i, j);
	}
    }
    return result;
};
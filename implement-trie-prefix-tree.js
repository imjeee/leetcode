/**
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
    this.isLeaf = false;
    this.children = {};
};

var Trie = function() {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    var node = this.root;
    for (var i = 0; i < word.length; i++) {
        var chr = word[i];
        if (node.children[chr] === undefined) {
            node.children[chr] = new TrieNode();
        }
        node = node.children[chr];
        if (i === word.length - 1) node.isLeaf = true;
    }
};

Trie.prototype.find = function(str) {
    var node = this.root;
    for (var i = 0; i < str.length; i++) {
        var chr = str[i];
        if (node.children[chr] === undefined) return null;
        node = node.children[chr];
    }
    return node;
}

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
    Trie.prototype.search = function(word) {
	var node = this.find(word);
	return node !== null && node.isLeaf;
    };

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    return this.find(prefix) !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */
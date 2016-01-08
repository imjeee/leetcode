/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * https://leetcode.com/problems/binary-search-tree-iterator/
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.stack = [];
    this.pushLeftTree(root);
};

BSTIterator.prototype.pushLeftTree = function(root) {
    while(root !== null) {
        this.stack.push(root);
        root = root.left;
    }
}

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
    BSTIterator.prototype.hasNext = function() {
	return this.stack.length > 0;
    };

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    var n = this.stack.pop();
    if (n.right !== null) {
        this.pushLeftTree(n.right);
    }
    return n.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
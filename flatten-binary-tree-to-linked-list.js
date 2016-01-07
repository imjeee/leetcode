/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root === null) return;
    
    var curr = new TreeNode();
    var stack = [root];
    
    while (stack.length > 0) {
        var node = stack.pop();
        if (node.right !== null) stack.push(node.right);
        if (node.left !== null) stack.push(node.left);
        curr.right = node;
        node.left = null;
        node.right = null;
        curr = node;
    }
};

var flatten = function(root) {
    if (root === null) return;
    
    function insert(root, rightBranch) {
        if (root.right === null) {
            root.right = rightBranch;
        } else {
            insert(root.right, rightBranch);
        }
    }
    if (root.left === null) {
        // do nothing
    } else if (root.right === null) {
        root.right = root.left;
        root.left = null;
    } else {
        var rightBranch = root.right;
        root.right = null;
        insert(root.left, rightBranch);
        root.right = root.left;
        root.left = null
    }
    flatten(root.right);
}
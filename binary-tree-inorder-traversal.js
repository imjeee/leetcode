/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root === null) return [];
    
    var result = [];
    var stack = [root];
    while(stack.length > 0) {
        var root = stack.pop();
        if (!isNaN(root)) {
            result.push(root);
        } else {
            if (root.right !== null) stack.push(root.right);
            stack.push(root.val);
            if (root.left !== null) stack.push(root.left);
        }
    }
    return result;
};
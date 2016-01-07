/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root === null) return [];
    var result = [];
    var stack = [root];
    while(stack.length > 0) {
        var root = stack.pop();
        if (!isNaN(root)) {
            result.push(root);
        } else {
            stack.push(root.val);
            if (root.right !== null) stack.push(root.right);
            if (root.left !== null) stack.push(root.left);
        }
    }
    return result;
};
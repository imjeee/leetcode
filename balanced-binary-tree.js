/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/balanced-binary-tree/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    function check(root) {
        if (root === null) return 0;
        var left = check(root.left);
        var right = check(root.right);
        var diff = Math.abs(left - right);
        if (left === -1 || right === -1 || diff > 1) return -1;
        return Math.max(left, right) + 1;
    }

    return check(root) !== -1;
};
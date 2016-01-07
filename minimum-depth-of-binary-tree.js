/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) return 0;
    
    function min(root, depth) {
        if (root.left === null && root.right === null) return depth;
        depth++;
        
        var leftDepth = root.left !== null ? min(root.left, depth) : Infinity;
        var rightDepth = root.right !== null ? min(root.right, depth) : Infinity;
        return Math.min(leftDepth, rightDepth);
    }
    
    return min(root, 1);
};
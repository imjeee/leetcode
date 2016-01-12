/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) return [];
    var result = [0];
    var q = [root, ','];
    while(q.length > 0) {
        var node = q.shift();
        if (node === ',') {
            if (q.length > 0) {
                q.push(',');
                result.push(0);
            }
        } else {
            result[result.length-1] = node.val;
            if (node.left !== null) q.push(node.left);
            if (node.right !== null) q.push(node.right);
        }
    }
    return result;
};
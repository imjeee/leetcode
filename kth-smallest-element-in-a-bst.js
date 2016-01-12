/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var stack = [root];
    var q = [];
    while(q.length < k) {
        var root = stack.pop();
        while(root !== null) {
            var left = root.left;
            root.left = null;
            stack.push(root);
            root = left;
        }
        root = stack.pop();
        if (root.right !== null) stack.push(root.right);
        q.push(root.val);
    }
    return q[k-1];
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var low = p.val < q.val ? p.val : q.val;
    var high = p.val > q.val ? p.val : q.val;
    
    function common(root, low, high) {
        if (root.val >= low && root.val <= high) return root;
        if (root.val > low && root.val > high) return common(root.left, low, high);
        return common(root.right, low, high);
    }
    
    return common(root, low, high);
};
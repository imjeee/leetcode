/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var upper = Infinity;
    var lower = Number.NEGATIVE_INFINITY;
    function valid(lower, upper, root) {
        if (root === null) return true;
        if (root.val >= upper || root.val <= lower) return false;
        return valid(lower, root.val, root.left) && valid(root.val, upper, root.right);
    }
    return valid(lower, upper, root);
};
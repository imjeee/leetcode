/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder === null || postorder === null) return null;
    
    function build(low, high, top, inorder, postorder) {
        if (low > high) return null;
        if (low === high) return new TreeNode(inorder[low]);
        
        var root = new TreeNode(postorder[top]);
        var mid = inorder.indexOf(postorder[top]);
        root.left = build(low, mid-1, top - (high - mid) - 1, inorder, postorder);
        root.right = build(mid+1, high, top-1, inorder, postorder);
        return root;
    }
    
    return build(0, inorder.length-1, inorder.length-1, inorder, postorder);
};
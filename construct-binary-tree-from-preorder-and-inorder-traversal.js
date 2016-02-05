/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    var pres = 0;
    var pree = preorder.length-1;
    var ins = 0;
    var ine = inorder.length-1;
    
    function build(preorder, inorder, pres, pree, ins, ine) {
        if (pres > pree) return null;
        
        var val = preorder[pres];
        var inorderIndexOfVal = inorder.indexOf(val);
        var node = new TreeNode(val);
        
        var leftSize = inorderIndexOfVal - ins;
        var rightSize = ine - inorderIndexOfVal;
        
        node.left = build(preorder, inorder, pres+1, pres + leftSize, ins, inorderIndexOfVal - 1);
        node.right = build(preorder, inorder, pres + leftSize + 1, pree, inorderIndexOfVal + 1, ine);
        return node;
    }
    
    return build(preorder, inorder, pres, pree, ins, ine);
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if (root === null) return 0;
    
    function maxSum(root) {
        if (root === null) return [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
        var left = maxSum(root.left);
        var right = maxSum(root.right);
        
        var includeRoot = Math.max(
				   root.val,
				   root.val + left[0],
            root.val + right[0]
				   );
        var notIncludingRoot = Math.max(
					includeRoot,
					left[1],
					right[1],
            root.val + left[0] + right[0]
					)
	    return [includeRoot, notIncludingRoot];
    }
    
    var sum = maxSum(root);
    return Math.max(sum[0], sum[1]);
};
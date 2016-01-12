/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    var sums = [];
    function getSums(root, path, sums) {
        if (root === null) return;
        path.push(root.val);
        
        if (root.left === null && root.right === null) {
            var sum = path.reduce(function(prev, curr) {
		    return prev + curr;
		}, '')
		sums.push(sum);
        } else {
            getSums(root.left, path, sums);
            getSums(root.right, path, sums);
        }
        path.pop();
    }
    getSums(root, [], sums);
    return sums.reduce(function(prev, curr) {
	    return Number(prev) + Number(curr);
	}, 0)
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/path-sum-ii/
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var result = [];
    var curr = [];
    
    function pathSumHelper(root, sum, curr, result) {
        if (root === null) return;
        curr.push(root.val);
        if (root.left === null && root.right === null && sum - root.val === 0) {
            result.push(curr.slice());
        } else {
            pathSumHelper(root.left, sum - root.val, curr, result);
            pathSumHelper(root.right, sum - root.val, curr, result);
        }
        curr.pop();
    }
    
    pathSumHelper(root, sum, curr, result);
    return result;
};
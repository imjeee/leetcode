/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) return [];
    var result = [[]];
    var q = [root, ','];
    while(q.length > 0) {
        var ele = q.shift();
        if (ele === ',') {
            if (q.length > 0) {
                q.push(',');
                result.push([]);
            }
        } else {
            result[result.length-1].push(ele.val);
            if (ele.left !== null) q.push(ele.left);
            if (ele.right !== null) q.push(ele.right);
        }
    }
    result.reverse();
    return result;
};
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (root === null) return;
    var q = [root, '.'];
    var prev = null;
    while(q.length > 0) {
        var node = q.shift();
        if (node === '.') {
            if (q.length > 0) {
                q.push('.');
                prev = null;
            }
        } else {
            if (prev !== null) prev.next = node;
            if (node.left !== null) q.push(node.left);
            if (node.right !== null) q.push(node.right);
            prev = node;
        }
    }
};
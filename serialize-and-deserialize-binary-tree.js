/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) return '';
    
    var q = [root];
    var result = '';
    while(q.length > 0) {
        var node = q.shift();
        if (node === null) {
            result += '.';
        } else {
            result += node.val;
            q.push(node.left);
            q.push(node.right);
        }
        if (q.length > 0) result += ',';
    }
    console.log(result)
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === null || data === '') return null;
    data = data.split(',');
    var root = new TreeNode(Number(data[0]));
    var q = [root];
    var i = 1;
    while(i < data.length) {
        var node = q.shift();
        if (data[i] !== '.') {
            var left = new TreeNode(Number(data[i]));
            node.left = left;
            q.push(left);
        }
        i++;
        if (data[i] !== '.') {
            var right = new TreeNode(Number(data[i]));
            node.right = right;
            q.push(right);
        }
        i++;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
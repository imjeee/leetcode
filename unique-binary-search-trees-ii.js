/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii/
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return [];
    function generate(low, high) {
        if (low > high) return [null];
        var result = [];
        for (var i = low; i <= high; i++) {
            var left = generate(low, i-1);
            var right = generate(i+1, high);
            for (var j = 0; j < left.length; j++) {
                for (var k = 0; k < right.length; k++) {
                    var node = new TreeNode(i);
                    node.left = left[j];
                    node.right = right[k];
                    result.push(node);
                }
            }
        }
        return result;
    }
    return generate(1, n);
};
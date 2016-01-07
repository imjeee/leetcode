/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums === null || nums.length === 0) return null;
    
    function createTree(low, high, nums) {
        if (low > high) return null;
        if (low === high) return new TreeNode(nums[low]);
        var mid = Math.floor((low + high)/2);
        var root = new TreeNode(nums[mid]);
        root.left = createTree(low, mid-1, nums);
        root.right = createTree(mid+1, high, nums);
        return root;
    }
    
    var low = 0;
    var high = nums.length-1;
    return createTree(low, high, nums);
};
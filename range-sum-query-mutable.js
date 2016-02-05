var TreeNode = function(start, end) {
    this.start = start;
    this.end = end;
    this.val = 0;
    this.left = null;
    this.right = null;
}
/**
 * https://leetcode.com/problems/range-sum-query-mutable/
 * @constructor
 * @param {number[]} nums
 */
    var NumArray = function(nums) {
	this.root = this.buildTree(nums, 0, nums.length-1);
    };

NumArray.prototype.buildTree = function(nums, start, end) {
    if (start > end) return null;
    var node = new TreeNode(start, end);
    if (start === end) {
        node.val = nums[start];
    } else {
        var mid = Math.floor((start + end)/2);
        node.left = this.buildTree(nums, start, mid);
        node.right = this.buildTree(nums, mid+1, end);
        node.val = node.left.val + node.right.val;
    }
    return node;
}

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
    NumArray.prototype.update = function(i, val) {
	this.updateTree(i, val, this.root);
    };

NumArray.prototype.updateTree = function(i, val, node) {
    if (node.start === i && node.end === i) {
        node.val = val;
    } else {
        var mid = Math.floor((node.start + node.end)/2);
        if (i <= mid) {
            this.updateTree(i, val, node.left);
        } else {
            this.updateTree(i, val, node.right);
        }
        var leftVal = node.left !== null ? node.left.val : 0;
        var rightVal = node.right !== null ? node.right.val : 0;
        node.val = leftVal + rightVal;
    }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
    NumArray.prototype.sumRange = function(i, j) {
	return this.sumRangeFromTree(i, j, this.root);
    };

NumArray.prototype.sumRangeFromTree = function(i, j, node) {
    if (i === node.start && j === node.end) {
        return node.val;
    } else {
        var mid = Math.floor((node.start + node.end)/2);
        if (j <= mid) {
            return this.sumRangeFromTree(i, j, node.left);
        } else if (i > mid) {
            return this.sumRangeFromTree(i, j, node.right);
        } else {
            var sum = this.sumRangeFromTree(i, mid, node.left);
            sum += this.sumRangeFromTree(mid+1, j, node.right);
            return sum;
        }
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */
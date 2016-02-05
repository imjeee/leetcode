/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    var low = 0;
    var high = nums.length-1;
    
    function findk(low, high, nums, k) {
        if (low === high) return nums[low];
        var pivot = nums[Math.floor((low + high)/2)];
        var i = low;
        var j = high;
        while(i <= j) {
            while(nums[i] < pivot) i++;
            while(nums[j] > pivot) j--;
            if (i <= j) {
                var tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
                if (i === j) {
                    i++;
                } else {
                    i++;
                    j--;
                }
            }
        }
        if (high - i + 1 >= k) {
            return findk(i, high, nums, k);
        } else {
            return findk(low, j, nums, k - (high - j));
        }
    }
    
    return findk(low, high, nums, k);
}

/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return nums.sort(function(a,b){return a-b;})[nums.length-k];
}


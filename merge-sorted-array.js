/**
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i = m + n - 1;
    m--;
    n--;
    while(i >= 0) {
        if (n < 0) return;
        if (m < 0 || nums2[n] >= nums1[m]) {
            nums1[i] = nums2[n];
            n--;
        } else {
            nums1[i] = nums1[m];
            m--;
        }
        i--;
    }
};
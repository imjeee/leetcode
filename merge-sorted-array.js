/**
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    m--;
    n--;
    for (var i = m + n + 1; i >= 0; i--) {
        if (m < 0) {
            nums1[i] = nums2[n--];
        } else if (n < 0) {
            return;
        } else {
            var mVal = nums1[m];
            var nVal = nums2[n];
            if (mVal > nVal) {
                nums1[i] = mVal;
                m--;
            } else {
                nums1[i] = nVal;
                n--;
            }
        }
    }
};
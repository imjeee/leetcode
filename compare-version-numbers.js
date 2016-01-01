/**
 * https://leetcode.com/problems/compare-version-numbers/
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1 = version1.split('.');
    var v2 = version2.split('.');
    for (var i = 0; i < v1.length || i < v2.length; i++) {
        var one = i < v1.length ? Number(v1[i]) : 0;
        var two = i < v2.length ? Number(v2[i]) : 0;
        if (one > two) return 1;
        if (two > one) return -1;
    }
    return 0;
};
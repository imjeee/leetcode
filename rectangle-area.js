/**
 * https://leetcode.com/problems/rectangle-area/
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var total = (C - A) * (D - B) + (G - E) * (H - F);
    
    if (C < E || A > G) return total;
    if (H < B || F > D) return total;
    
    var left = Math.max(A, E);
    var right = Math.min(C, G);
    var up = Math.min(D, H);
    var down = Math.max(B, F);
    
    var intersect = (right - left) * (up - down);

    return total - intersect;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;
    function findLength(node) {
        var count = 0;
        while(node !== null) {
            count++;
            node = node.next;
        }
        return count;
    }
    
    var aLength = findLength(headA);
    var bLength = findLength(headB);
    while(aLength > bLength) {
        headA = headA.next;
        aLength--;
    }
    while(bLength > aLength) {
        headB = headB.next;
        bLength--;
    }
    
    while(headA !== null && headB !== null) {
        if (headA === headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/reorder-list/
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head === null) return;
    
    // cut list to half
    var slow = head;
    var fast = head.next;
    
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    var l1 = head;
    var l2 = slow.next;
    slow.next = null;
    
    // reverse second half of list
    var prev = null;
    var next = null;
    while(l2 !== null) {
        next = l2.next;
        l2.next = prev;
        prev = l2;
        l2 = next;
    }
    l2 = prev;
    
    // stitch back together
    while(l2 !== null) {
        var tmp = l1.next;
        l1.next = l2;
        var tmp2 = l2.next;
        l2.next = tmp;
        l1 = tmp;
        l2 = tmp2;
    }
};
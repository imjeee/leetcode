/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var head = new ListNode();
    var node = head;
    while(l1 !== null || l2 !== null) {
        if (l1 === null) {
            node.next = l2;
            return head.next;
        } else if (l2 === null) {
            node.next = l1;
            return head.next;
        } else if (l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
        } else {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next;
    }
    return head.next;
};
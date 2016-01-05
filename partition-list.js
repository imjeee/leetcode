/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/partition-list/
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var leftDummy = new ListNode();
    var rightDummy = new ListNode();
    var left = leftDummy;
    var right = rightDummy;
    while(head !== null) {
        var tmp = head.next;
        head.next = null;
        if (head.val < x) {
            left.next = head;
            left = left.next;
        } else {
            right.next = head;
            right = right.next;
        }
        head = tmp;
    }
    if (leftDummy.next === null) return rightDummy.next;
    left.next = rightDummy.next;
    return leftDummy.next;
};
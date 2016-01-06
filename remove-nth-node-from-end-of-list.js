/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var runner = head;
    var walker = head;
    for (var i = 0; i < n; i++) {
        runner = runner.next;
    }
    
    if (runner === null) return head.next;
    
    while(runner.next !== null) {
        runner = runner.next;
        walker = walker.next;
    }
    walker.next = walker.next.next;
    return head;
};
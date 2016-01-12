/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/insertion-sort-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    var newHead = null;
    while(head !== null) {
        var node = head;
        head = head.next;
        node.next = null;
        
        if (newHead === null) {
            newHead = node;
        } else {
            if (node.val < newHead.val) {
                node.next = newHead;
                newHead = node;
            } else {
                var curr = newHead;
                while(curr.next !== null && curr.next.val < node.val) {
                    curr = curr.next;
                }
                node.next = curr.next;
                curr.next = node;
            }
        }
    }
    return newHead;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m === n) return head;
    if (m === 1) return reverse(head, n);
    
    function reverse(head, n) {
        var curr = head;
        var tail = head;
        var prev = null;
        for (var i = 0; i < n; i++) {
            var next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        tail.next = curr;
        return prev;
    }
    
    var node = head;
    while(m > 2) {
        node = node.next;
        m--;
        n--;
    }
    node.next = reverse(node.next, n-1);
    return head;
};
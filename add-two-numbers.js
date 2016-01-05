/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    
    var head = new ListNode();
    var node = head;
    var carry = 0;
    
    while(l1 !== null || l2 !== null) {
        l1 = l1 === null ? new ListNode(0) : l1;
        l2 = l2 === null ? new ListNode(0) : l2;

        var total = l1.val + l2.val + carry;
        carry = Math.floor(total/10);
        node.next = new ListNode(total%10);
        
        node = node.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    if (carry === 1) node.next = new ListNode(1);
    
    return head.next;
};
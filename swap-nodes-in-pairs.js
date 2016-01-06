/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null) return head;
    var two = head;
    var one = head.next;
    var three = swapPairs(head.next.next);
    one.next = two;
    two.next = three;
    return one;
};

/**
 * iterative approach
 **/
var swapPairs = function(head) {
    if (head === null || head.next === null) return head;
    
    var result = null;
    var prev = new ListNode();
    while(head !== null && head.next !== null) {
        var one = head;
        var two = head.next;
        var three = head.next.next;
        prev.next = two;
        two.next = one;
        one.next = three;
        prev = one;
        head = three;
        if (result === null) result = two;
    }
    return result;
};
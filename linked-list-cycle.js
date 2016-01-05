/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle/
 * not sure why === compare fast to slow works, since they are object comparison...
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head;
    var fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) return true;
    }
    return false;
};
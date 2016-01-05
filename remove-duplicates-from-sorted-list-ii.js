/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;

    var result = new ListNode();
    var node = result;
    
    while(head !== null) {
        var orig = head;
        var head = head.next;
        var dup = false;
        while(head !== null && head.val === orig.val) {
            dup = true;
            head = head.next;
        }
        if (!dup) {
            orig.next = null;
            node.next = orig;
            node = node.next;
        }
    }
    return result.next;
};
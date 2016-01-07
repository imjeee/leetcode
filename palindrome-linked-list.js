/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    var walker = head;
    var runner = head.next;
    while(runner !== null && runner.next !== null) {
        walker = walker.next;
        runner = runner.next.next;
    }
    
    function reverse(head) {
        var prev = null;
        while(head !== null) {
            var next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
    
    var cutoff = walker;
    var secondHalf = walker.next;
    walker.next = null;
    
    var result = true;
    var one = head;
    var two = reverse(secondHalf);
    while(one !== null && two !== null) {
        if (one.val !== two.val) result = false;
        one = one.next;
        two = two.next;
    }
    
    cutoff.next = reverse(secondHalf);
    return result;
};
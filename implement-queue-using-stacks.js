/**
 * @constructor
 */
var Queue = function() {
    this.stack = [];
};

/**
 * https://leetcode.com/problems/implement-queue-using-stacks/
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    var tmp = []
    while(this.stack.length > 0) {
        tmp.push(this.stack.pop());
    }
    this.stack.push(x);
    while(tmp.length > 0) {
        this.stack.push(tmp.pop());
    }
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.stack.length === 0;
};
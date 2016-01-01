/**
 * https://leetcode.com/problems/min-stack/
 * @constructor
 */
var MinStack = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    if (this.stack.length === 0) {
        this.stack.push([x,x]);
    } else {
        var prevMin = this.stack[this.stack.length-1][1];
        var newMin = Math.min(prevMin, x);
        this.stack.push([x, newMin]);
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1][0];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1][1];
};
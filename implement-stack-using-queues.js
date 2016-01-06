/**
 * @constructor
 */
var Stack = function() {
    this.q = [];
};

/**
 * https://leetcode.com/problems/implement-stack-using-queues/
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    var tmp = [];
    while(this.q.length > 0) {
        tmp.push(this.q.shift());
    }
    this.q.push(x);
    while(tmp.length > 0) {
        this.q.push(tmp.shift());
    }
    console.log(this.q)
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.q.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.q[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.q.length === 0;
};
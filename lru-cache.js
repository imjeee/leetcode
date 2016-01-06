// it doesn't pass test case with really large input, not sure why...

var Node = function(key, value) {
    this.key = key;
    this.val = value;
    this.next = null;
    this.prev = null;
}

/**
 * @constructor
 */
    var LRUCache = function(capacity) {
	this.capacity = capacity;
	this.len = 0;
	this.map = {};
	this.head = null;
	this.tail = null;
    };

LRUCache.prototype.remove = function(node) {
    if (this.head === node) this.head = node.next;
    if (this.tail === node) this.tail = node.prev;
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    delete this.map[node.key];
}

    LRUCache.prototype.add = function(node) {
	this.map[node.key] = node;
	if (this.head === null) {
	    this.head = node;
	    this.tail = node;
	}
    
	this.tail.next = node;
	node.prev = this.tail;
    
	this.tail = node;
    }

    /**
     * @param {number} key
     * @returns {number}
     */
	LRUCache.prototype.get = function(key) {
	    if (this.map[key] !== undefined) {
		var node = this.map[key];
		this.remove(node);
		this.add(node);
		return node.val;
	    }
	    return -1;
	};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if (this.map[key] !== undefined) {
        var node = this.map[key];
        node.val = value;
        
        this.remove(node);
        this.add(node);
    } else {
        var newNode = new Node(key, value);
        
        if (this.len < this.capacity) {
            this.len++;
        } else {
            this.remove(this.head);
        }
        this.add(newNode);
    }
};
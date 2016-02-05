var MinHeap = function() {
    this.arr = [null];
}
    
MinHeap.prototype.push = function(obj) {
    this.arr.push(obj);
    var i = this.arr.length-1;
    var iParent = Math.floor(i/2);
    while(iParent !== 0 && this.arr[iParent].size > this.arr[i].size) {
	var tmp = this.arr[iParent];
	this.arr[iParent] = this.arr[i];
	this.arr[i] = tmp;
	i = iParent;
	iParent = Math.floor(i/2);
    }
}

MinHeap.prototype.top = function() {
    if (this.arr.length < 2) return null;
    return this.arr[1];
}

MinHeap.prototype.swap = function(i, j) {
    var tmp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = tmp;
}

MinHeap.prototype.drop = function drop(i) {
    var iLeft = i*2;
    var iRight = i*2+1;
    
    var top = this.arr[i];
    var left = this.arr[iLeft];
    var right = this.arr[iRight];
    
    if (left === undefined && right === undefined) return;
    
    if (left !== undefined && right !== undefined) {
	if (left.size < right.size && top.size > left.size) {
	    this.swap(i, iLeft);
	    this.drop(iLeft);
	} else if (top.size > right.size) {
	    this.swap(i, iRight);
	    this.drop(iRight);
	}
    } else if (right === undefined && top.size > left.size) {
	this.swap(i, iLeft);
	this.drop(iLeft);
    } else if (left === undefined && top.size > right.size) {
	this.swap(i, iRight);
	this.drop(iRight);
    }
}
    
MinHeap.prototype.pop = function() {
    if (this.arr.length < 2) return null;
    if (this.arr.length === 2) return this.arr.pop();
    var result = this.arr[1];
    this.arr[1] = this.arr.pop();
    
    this.drop(1);
    return result;
}
    
MinHeap.prototype.size = function() {
    return this.arr.length;
}
	
MinHeap.prototype.values = function() {
    var clone = this.arr.slice();
    clone.shift();
    return clone;
}

function test() {
    var minHeap = new MinHeap();
    minHeap.push({value:'a',size:1});
    minHeap.push({value:'ab',size:2});
    minHeap.push({value:'abc',size:3});
    while(minHeap.top() !== null) {
	console.log(JSON.stringify(minHeap.pop()));
    }
}

test();
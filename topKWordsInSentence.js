function topKWords(sentence, k) {
    var words = sentence.split(' ');
    var map = (function(words) {
	    var map = {};
	    for (var i = 0; i < words.length; i++) {
		if (map[words[i]] === undefined) {
		    map[words[i]] = 1;
		} else {
		    map[words[i]] += 1;
		}
	    }
	    return map;
	}(words));

    var minHeap = new MinHeap();
    for (var key in map) {
        var obj = {value:key, size:map[key]};
        if (minHeap.size() < k) {
            minHeap.push(obj);
        } else if (minHeap.top().size < map[key]) {
            minHeap.pop();
            minHeap.push(obj);
        }
    }
    
    var result = (function(list) {
	    var arr = [];
	    for (var i = 0; i < list.length; i++) {
		arr.push(list[i]);
	    }
	    return arr;
	}(minHeap.values()))
	
	return result;
}

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
				    var seen = {};
				    var minHeap = new MinHeap();
				    for (var i = 0; i < 100; i++) {
					var n = Math.floor(Math.random()*100);
					if (seen[n] === undefined) {
					    minHeap.push({value:n, size:n});
					    seen[n] = true;
					}
        
				    }
				    console.log(minHeap);
				    console.log(minHeap.top());
				    console.log(JSON.stringify(minHeap.values()));
				    while(minHeap.top() !== null) {
					console.log(minHeap.pop().size);
				    }
				}
//test();

var result = topKWords('hello hello hello hi hi hi hi hi f f f f what what what is going on on on on', 3)
				    console.log(JSON.stringify(result))

function TwoSum() {
    this.map = {};
}

TwoSum.prototype.add = function(x) {
    if (this.map[x] === undefined)
        this.map[x] = 1;
    else
        this.map[x]++;
}

    TwoSum.prototype.find = function(x) {
	for(var num in this.map) {
	    num = Number(num)
	    if (x - num === num) {
		if (this.map[x - num] === 2) return true;
	    } else {
		if (this.map[x - num] !== undefined) return true;
	    }
	}
	return false;
    }
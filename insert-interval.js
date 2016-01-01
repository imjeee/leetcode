/**
 * https://leetcode.com/problems/insert-interval/
 * optimal solution
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var result = [];

    intervals.forEach(function(interval) {
	    if (interval.end < newInterval.start) {
		result.push(interval);
	    } else if (interval.start > newInterval.end) {
		result.push(newInterval);
		newInterval = interval;
	    } else {
		var start = Math.min(newInterval.start, interval.start);
		var end = Math.max(newInterval.end, interval.end);
		newInterval = new Interval(start, end);
	    }
	})
    
    result.push(newInterval);
    return result;
};

/**
 * https://leetcode.com/problems/insert-interval/
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort(function(a,b) { return a.start - b.start; });
    
    var result = [];
    var prev = intervals[0];
    
    intervals.forEach(function(interval) {
	    if (prev.end >= interval.start) {
		var end = Math.max(prev.end, interval.end);
		prev = new Interval(prev.start, end);
	    } else {
		result.push(prev);
		prev = interval;
	    }
	})
    
    result.push(prev);
    return result;
};

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
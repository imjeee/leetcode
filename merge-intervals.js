/**
 * https://leetcode.com/problems/merge-intervals/
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals === null || intervals.length < 2)
        return intervals;
    
    intervals.sort(function(a,b) {
	    return a.start - b.start;
	});
    
    var result = [];
    
    var prev = intervals[0];
    
    for (var i = 1; i < intervals.length; i++) {
        var interval = intervals[i];
        if (prev.end >= interval.start) {
            var end = Math.max(prev.end, interval.end);
            prev = new Interval(prev.start, end);
        } else {
            result.push(prev);
            prev = interval;
        }
    }
    result.push(prev);
    
    return result;
};
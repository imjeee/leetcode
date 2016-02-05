/**
 * https://leetcode.com/problems/reconstruct-itinerary/
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    var map = {};
    tickets.forEach(function(ticket) {
	    var from = ticket[0];
	    var to = ticket[1];
	    if (map[from] === undefined) {
		map[from] = [to];
	    } else {
		map[from].push(to);
	    }
	});
    
    for (var key in map) {
        map[key].sort();
    }
    
    function findPath(currCity, locationsLeft, map) {
        if (locationsLeft === 0) return [];
        var nextCities = map[currCity];
        if (nextCities === undefined || nextCities.length === 0) return null;
        for (var i = 0; i < nextCities.length; i++) {
            var nextCity = nextCities.splice(i,1)[0];
            var rest = findPath(nextCity, locationsLeft-1, map);
            if (rest !== null) {
                rest.unshift(nextCity);
                return rest;
            }
            nextCities.splice(i, 0, nextCity);
        }
        return null;
    }
    
    var result = findPath('JFK', tickets.length, map);
    result.unshift('JFK');
    return result;
};
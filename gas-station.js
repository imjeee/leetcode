/**
 * https://leetcode.com/problems/gas-station/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var diff = 0;
    var gasLeft = 0;
    var start = -1;
    for (var i = 0; i < gas.length; i++) {
        diff += gas[i] - cost[i];
        gasLeft += gas[i] - cost[i];
        if (gasLeft >= 0 && start === -1) start = i;
        if (gasLeft < 0) {
            start = -1;
            gasLeft = 0;
        }
    }
    if (diff < 0) return -1;
    return start;
};
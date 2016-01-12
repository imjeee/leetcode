/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * https://leetcode.com/problems/clone-graph/
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    if (graph === null) return null;
    
    var newHead = new UndirectedGraphNode(graph.label);
    var q = [graph];
    var map = {};
    map[graph.label] = newHead;
    
    while(q.length > 0) {
        var curr = q.shift();
        var neighbors = curr.neighbors;
        for (var i = 0; i < neighbors.length; i++) {
            var neighbor = neighbors[i];
            if (map[neighbor.label] === undefined) {
                var newNode = new UndirectedGraphNode(neighbor.label);
                map[neighbor.label] = newNode;
                map[curr.label].neighbors.push(newNode);
                q.push(neighbor);
            } else {
                map[curr.label].neighbors.push(map[neighbor.label]);
            }
        }
    }
    
    return newHead;
};
/**
 * https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if (numCourses === 0 || prerequisites.length === 0) return true;
    
    var prereq = prerequisites;
    var courses = [];
    
    for (var i = 0; i < numCourses; i++) {
        courses.push(0);
    }

    for (i = 0; i < prereq.length; i++) {
        console.log(prereq[i][0])
        courses[prereq[i][0]]++;
    }

    var q = [];

    for (i = 0; i < courses.length; i++) {
        if (courses[i] === 0) {
            q.push(i);
        }
    }
    
    while(q.length > 0) {
        var reachedCourse = q.shift();
        for (i = 0; i < prereq.length; i++) {
            if (prereq[i][1] === reachedCourse) {
                courses[prereq[i][0]]--;
                if (courses[prereq[i][0]] === 0) {
                    q.push(prereq[i][0]);
                }
            }
        }
    }
    
    for (i = 0; i < courses.length; i++) {
        if (courses[i] > 0) return false;
    }
    return true;
};
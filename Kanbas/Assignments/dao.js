import Database from "../Database/index.js";

export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter(assignment => assignment.course === courseId);
}

export function createAssignment(courseId, assignment) {
    const newAssignment = {
      ...assignment,
      _id: new Date().getTime().toString(), 
      course: courseId, 
      startTime: assignment.startTime || new Date().toISOString(),
      dueTime: assignment.dueTime || new Date().toISOString(),
    };
    Database.assignments.push(newAssignment);
    return newAssignment;
  }

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
  }

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((a) => a._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
    
}
import * as enrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  
  app.get("/api/enrollments", (req, res) => {
    const enrollments = enrollmentsDao.getEnrollments();
    res.json(enrollments);
  });

 
  app.post("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const updatedEnrollments = enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.json(updatedEnrollments);
  });


  app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const updatedEnrollments = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.json(updatedEnrollments);
  });
}

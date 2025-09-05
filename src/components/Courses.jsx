import React from "react";
import SectionHeader from "./SectionHeader";
import CoursesData from "./CoursesData";
import CourseCard from "./CourseCard";
function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="container">
        <SectionHeader 
          title="Our Popular Courses"
          subtitle="Choose from a wide range of courses designed for your growth"
          color="#ff4d4f"
        />

          <div className="card-container" >
        {CoursesData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Courses;

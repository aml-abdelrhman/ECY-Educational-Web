import React from "react";
import CoursesData from "./CoursesData";

export default function CourseCard({
  img,
  department,
  title,
  rating,
  description,
  sales,
  price,
  discount,
  duration,
  lessons,
  color,
  backgroundColor
}) {
  return (
    <div className="course-card" style={{ backgroundColor: color }} >
    <img src={img} alt={title} className="course-img" />

      <div className="course-body">
        <span className="course-department">{department}</span>
        <h3>{title}</h3>
        <p className="course-description">{description}</p>

        <div className="course-info">
          <span>⭐ {rating}</span>
          <span>📚 {lessons} lessons</span>
          <span>⏳ {duration}</span>
        </div>

        <div className="course-sales">
          <span>{sales}+ Enrolled</span>
        </div>

        <div className="course-price">
          <span className="old-price">${price}</span>
          <span className="new-price">${discount}</span>
        </div>
      </div>
    </div>
  );
}

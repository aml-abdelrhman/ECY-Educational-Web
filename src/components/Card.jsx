import React from "react";

export default function Card({ img, title, description, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
     <img src={img} alt={title} style={{ width: "100px", height: "100px" }} />
      <h2>{title}</h2>
      <span className="line"></span>
      <p>{description}</p>
    </div>
  );
}


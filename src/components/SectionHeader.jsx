import React from "react";

function SectionHeader({ title, subtitle, color }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <span 
        className="section-line" 
        style={{ backgroundColor: color || "#ff4d4f" }}
      ></span>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

export default SectionHeader;

import React from "react";
import "./PropertyRating.css";

export const PropertyRating = ({ rating }) => {
  return (
    <div className="rating">
      <i className="gg-trophy"></i>
      <span>{Math.round((rating + Number.EPSILON) * 100) / 100}</span>
    </div>
  );
};

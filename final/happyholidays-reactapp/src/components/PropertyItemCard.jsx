import React from "react";
import "./PropertyItemCard.css";
import "../icons.css";
import { PropertyRating } from "./PropertyRating";
import Link from "./Link.jsx";

export const PropertyItemCard = ({ property, onFavoriteClick }) => {
  const {
    propertyName,
    rating,
    tarriff,
    stateName,
    isFavorite,
    imgFileName,
    id,
  } = property;

  const handleFavoriteClicked = (e) => {
    e.stopPropagation();
    onFavoriteClick(id);
  };

  return (
    <div className="property-item-card">
      <Link href={`/property-details?id=${id}`}>
        <div className="property-item-card-image">
          <img
            src={`images/${imgFileName}`}
            alt={propertyName}
            width={"300px"}
            height={"300px"}
          />
        </div>
      </Link>
      <i
        className={`favorite-icon ${
          isFavorite ? "gg-heart-filled" : "gg-heart"
        }`}
        onClick={handleFavoriteClicked}
      ></i>
      <Link href={`/property-details?id=${id}`}>
        <div className="property-title-rating">
          <h4>{propertyName}</h4>
          <PropertyRating rating={rating} />
        </div>
        <p>{stateName}</p>
        <p>
          <strong>${tarriff}</strong>/night
        </p>
      </Link>
    </div>
  );
};

import React from "react";
import { NoData } from "../components/NoData";
import { PropertyFilters } from "../components/PropertyFilters";
import { PropertyItemCard } from "../components/PropertyItemCard";
import useProperties from "../hooks/useProperties";
import "./Home.css";

export const Home = () => {
  const properties = useProperties();

  const handleFavoriteClicked = (propertyId) => {
    properties.toggleFavorite(propertyId);
  };

  return (
    <main>
      <h1 className="page-title">Explore Properties</h1>
      <PropertyFilters />
      {properties?.data?.length === 0 && (
        <NoData
          helperText={`We could not find anything to match that criteria. Modify filter options and try again!`}
        />
      )}
      <div className="properties-list">
        {properties?.data?.map((property) => (
          <PropertyItemCard property={property} key={property.id} onFavoriteClick={handleFavoriteClicked} />
        ))}
      </div>
    </main>
  );
};

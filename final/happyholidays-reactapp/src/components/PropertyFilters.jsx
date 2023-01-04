import React, { useEffect, useState } from "react";
import "./PropertyFilters.css";
import statesJSON from "../data/us-states.json";
import useProperties from "../hooks/useProperties";
import "../icons.css";

export const PropertyFilters = () => {
  const [states] = useState(statesJSON);
  const properties = useProperties();

  const [filterParams, setFilterParams] = useState({ location: "", adults: 1 });
  const [showSortMenu, setShowSortMenu] = useState(false);

  const toggleSortMenu = () => {
    setShowSortMenu(!showSortMenu);
  };

  const handleSortClicked = (key, desc) => {
    setShowSortMenu(false);
    properties.sortProperties(key, desc);
  }

  useEffect(() => {
    properties.filterProperties(filterParams);
  }, [filterParams]);

  const handleLocationChanged = (location) => {
    setFilterParams({ ...filterParams, location });
  };

  const handleAdultsChanged = (adults) => {
    setFilterParams({ ...filterParams, adults });
  };

  return (
    <div className="property-filters-card">
      <h4 className="filter-prompt">
        Search for your next cozy vacation abode.
      </h4>
      <form className="filters-form-container">
        <div className="select">
          <select
            className="select-text"
            value={filterParams.location}
            onChange={(e) => handleLocationChanged(e.target.value)}
          >
            <option value="">Anywhere</option>
            {states.map((state) => (
              <option value={state.name} key={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          <span className="select-highlight"></span>
          <span className="select-bar"></span>
          <label className="select-label">Location</label>
        </div>
        <div className="select">
          <select
            className="select-text"
            value={filterParams.adults}
            onChange={(e) => handleAdultsChanged(e.target.value)}
          >
            <option value="" disabled>
              No. of Adults
            </option>
            {new Array(20).fill(1).map((_, $index) => (
              <option value={$index + 1} key={$index}>
                {$index + 1}
              </option>
            ))}
          </select>
          <span className="select-highlight"></span>
          <span className="select-bar"></span>
          <label className="select-label">No. of Adults</label>
        </div>
        <h4 className="results-count">
          {properties?.data?.length}{" "}
          {properties?.data?.length !== 1
            ? "properties found"
            : "property found"}
        </h4>
        <button
          className="sort-btn"
          onClick={(e) => {
            e.preventDefault();
            toggleSortMenu();
          }}
        >
          <i className="gg-sort-az"></i>
          <h3>Sort</h3>
        </button>
        {showSortMenu && (
          <div className="sort-menu">
            <ul>
              <li onClick={() => handleSortClicked('rating', false)}>
                Sort By Rating - Low to High <i className="gg-arrow-up"></i>{" "}
              </li>
              <li onClick={() => handleSortClicked('rating', true)}>
                Sort By Rating - High to Low <i className="gg-arrow-down"></i>
              </li>
              <li onClick={() => handleSortClicked('tarriff', false)}>
                Sort By Price - Low to High <i className="gg-arrow-up"></i>
              </li>
              <li onClick={() => handleSortClicked('tarriff', true)}>
                Sort by Price - High to Low <i className="gg-arrow-down"></i>
              </li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

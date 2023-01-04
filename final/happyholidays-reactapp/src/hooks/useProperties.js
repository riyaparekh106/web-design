import { useContext, useMemo } from "react";
import { PropertiesContext } from "../contexts.js";
import propertiesJSON from "../data/properties.json";

const useProperties = () => {
  const { properties, setProperties } = useContext(PropertiesContext);

  const self = useMemo(() => {
    return {
      ...properties,

      loadProperties: async () => {
        setProperties({ ...properties, data: [...propertiesJSON] });
      },

      findById: (id) => {
        return [...propertiesJSON].find((property) => property.id === id);
      },

      sortProperties: (key, desc) => {
        const sortedProperties = [...properties.data].sort((a, b) =>
          desc ? b[key] - a[key] : a[key] - b[key]
        );
        setProperties({ ...properties, data: sortedProperties });
      },

      filterProperties: (filterParams) => {
        let filteredProperties = [...propertiesJSON];
        if (filterParams.location) {
          filteredProperties = filteredProperties.filter(
            (property) => property.stateName === filterParams.location
          );
        }

        if (filterParams.adults) {
          filteredProperties = filteredProperties.filter(
            (property) => filterParams.adults <= property.maxCapacity
          );
        }

        setProperties({ ...properties, data: filteredProperties });
      },

      toggleFavorite: (propertyId) => {
        const updatedProperties = [...properties.data].map((property) => {
          if (property.id === propertyId) {
            return { ...property, isFavorite: !property.isFavorite };
          }
          return property;
        });
        setProperties({ ...properties, data: updatedProperties });
      },
    };
  }, [properties, setProperties]);

  return self;
};

export default useProperties;
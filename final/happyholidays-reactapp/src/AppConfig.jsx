import React, { useState } from "react";
import { PropertiesProvider } from "./contexts";

export const AppConfig = ({ children }) => {
  const [properties, setProperties] = useState(null);
  return (
    <PropertiesProvider value={{ properties, setProperties }}>
      {children}
    </PropertiesProvider>
  );
};

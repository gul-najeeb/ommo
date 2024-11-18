/* global H */

import React, { useEffect, useRef } from "react";

const HereMapContainer = ({ apikey }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // Initialize the HERE platform
      const platform = new H.service.Platform({
        apikey,
      });

      const defaultLayers = platform.createDefaultLayers();

      // Create a map instance
      const map = new H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          center: { lat: 64.144, lng: -21.94 },
          zoom: 14,
        }
      );

      // Enable interaction
      const behavior = new H.mapevents.Behavior(
        new H.mapevents.MapEvents(map)
      );

      const ui = H.ui.UI.createDefault(map, defaultLayers);

      return () => {
        map.dispose(); // Clean up when component unmounts
      };
    }
  }, [apikey]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "500px",
      }}
    />
  );
};

export default HereMapContainer;

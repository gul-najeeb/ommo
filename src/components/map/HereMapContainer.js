/* global H */
import React, { useEffect, useRef } from "react";

const HereMapContainer = ({ apikey, markers }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // Initialize the HERE platform
      const platform = new H.service.Platform({
        apikey,
      });

      const defaultLayers = platform.createDefaultLayers();

      // Create a map instance
      const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
        center: { lat: 34, lng: 260  },
        zoom: 4,
      });

      // Enable interaction
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      const ui = H.ui.UI.createDefault(map, defaultLayers);

      // Add markers
      const markerData = [
        { lat: 38.7946, lng: 106.5348, label: "Marker 1" },
        { lat: 38.8006, lng: 106.5400, label: "Marker 2" },
        { lat: 38.7900, lng: 106.5300, label: "Marker 3" },
      ];
      console.log(markers, ' mark')

      markers.forEach(({ lat, lng, label }) => {
        const marker = new H.map.Marker({ lat, lng });
        // marker.setData(label); // Set label as data
        map.addObject(marker);
      });

      // Optional: Add marker info bubble
      // map.addEventListener("tap", function (evt) {
      //   const bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
      //     content: evt.target.getData(),
      //   });
      //   ui.addBubble(bubble);
      // });

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

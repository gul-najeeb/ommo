/* global H */
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const HereMapContainer = ({ apikey, markers = [] }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null); // Store the map instance


  useEffect(() => {
    try {
      
      // H.map.Error.enableDebug(); // Enable detailed debugging
     if (mapRef.current) {
      // Initialize the HERE platform
      const platform = new H.service.Platform({
        apikey,
      });


      const defaultLayers = platform.createDefaultLayers();

      // Create a map instance
      const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
        center: { lat: 34, lng: -100  },
        zoom: 4,
      });
              // mapInstance.current = map; // Save the map instance for future updates


      // / Define a variable holding SVG mark-up that defines an icon image:
      var svgMarkup = '<svg width="24" height="36" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<path fill="red" stroke="white" stroke-width="1" ' +
      'd="M12 0C7 0 3 4 3 9c0 6 9 15 9 15s9-9 9-15c0-5-4-9-9-9z"/>' +
      '<circle cx="12" cy="9" r="3" fill="white"/>' +
      '<text x="12" y="34" font-size="8pt" ' +
      'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
      'fill="white">H</text></svg>';
  

// Create an icon, an object holding the latitude and longitude, and a marker:
const icon = new H.map.Icon(svgMarkup)
 
      // Enable interaction
      // const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      const ui = H.ui.UI.createDefault(map, defaultLayers);

      // Add markers
      const markerData = [
        { lat: 38.7946, lng: 106.5348, label: "Marker 1" },
        { lat: 38.8006, lng: 106.5400, label: "Marker 2" },
        { lat: 38.7900, lng: 106.5300, label: "Marker 3" },
      ];
      console.log(markers, ' mark')

      markers.forEach(({ lat, lng, driverName	 }) => {
          // const marker = new H.map.Marker({ lat, lng });
          const marker = new H.map.Marker({lat, lng}, {icon: icon});

        marker.setData('Driver: '+driverName); // Set label as data
        // marker.setData('Driver: '+driverName); // Set label as data

        map.addObject(marker);

      });

      // Optional: Add marker info bubble
      map.addEventListener("tap", function (evt) {
        if (evt.target instanceof H.map.Marker) {
          // Check if the clicked target is a marker
          const bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
            content: evt.target.getData(), // Get the label
          });
          ui.addBubble(bubble);
        }
      });

      return () => {
        map.dispose(); // Clean up when component unmounts
      };
    }
  } catch (error) {
  // alert('good')      
  toast.error(error.message)
  }

  }, [apikey]);

  const switchToSatelliteMode = () => {
    if (mapInstance.current) {
      const platform = new H.service.Platform({ apikey });
      const defaultLayers = platform.createDefaultLayers();
      mapInstance.current.setBaseLayer(defaultLayers.raster.satellite.map);
    }
  };
  return (<>
    <button onClick={switchToSatelliteMode}>Switch to Satellite Mode</button>

    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "99.8vh",
      }}
      />
      </>
  );
};

export default HereMapContainer;

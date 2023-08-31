import "./map.css";

import * as React from "react";
import { useState, useEffect, useRef } from "react";

import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";

const MAX_ZOOM = 18;

function Map({ coords }) {
  const mapElement = useRef();
  const [mapZoom, setMapZoom] = useState(7);
  const [map, setMap] = useState({});
  
    console.log("heherre");

  useEffect(() => {
    let map = tt.map({
      key: "AdwrIWESBGKtEBbAuOK2p3q4WEpx9504",
      container: mapElement.current,
      center: [coords.lon, coords.lat],
      zoom: mapZoom,
    });
    setMap(map);

    let marker = new tt.Marker({
      draggable: false, // Set whether the marker is draggable or not
      color: "red", // Set the color of the marker
    });

    // Set the marker position based on the latitude and longitude values
    marker.setLngLat([coords.lon, coords.lat]);

    // Add the marker to the map
    marker.addTo(map);

  }, [coords.lat, coords.lon]);

  return (
    <div
      ref={mapElement}
      className="mapDiv mt-3 border rounded border"
    />
  );
}

export default Map;

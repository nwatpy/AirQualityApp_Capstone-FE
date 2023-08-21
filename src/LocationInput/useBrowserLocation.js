import { useState } from "react";

function useBrowserLocation() {
  const [coords, setLocation] = useState();

  const getBrowserLocation = () => {
    navigator.geolocation.getCurrentPosition(success, fail);

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ lat: latitude, lon: longitude });
    }

    function fail(error) {
      console.log("Declined access");
      setLocation("No location found");
    }
  };

  return { coords, getBrowserLocation };
}

export default useBrowserLocation;

import axios from "axios";
import { useState } from "react";

function useTypedLocation() {
  const [typedCoords, setCoords] = useState();

  const getCoords = async (location) => {
    if (location) {
      try {
        const res = await axios.get(
          `https://geocode.maps.co/search?q=${location}`,
          {
            timeout: 10000, // Set a timeout of 10 seconds
          }
        );

        const result = {
          lat: res.data[0].lat,
          lon: res.data[0].lon,
        };
        setCoords(result);
      } catch (error) {
        setCoords(`Please try again: ${error}`);
      }
    }
  };

  return { typedCoords, getCoords };
}

export default useTypedLocation;

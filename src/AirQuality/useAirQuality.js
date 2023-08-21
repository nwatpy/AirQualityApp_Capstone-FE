import axios from "axios";
import { useState } from "react";

function useAirQuality(coords) {
  const [airQuality, setAirQuality] = useState();

  const fetchAirQuality = async (coords) => {
    if (coords) {
      setAirQuality();
      const {lat, lon} = coords;
      console.log(lat);
      console.log(lon);
      try {
        const res = await axios.get(
          `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=1ef3e936-0780-4d79-9b85-91a16493884a`,
          {
            timeout: 10000, // Set a timeout of 10 seconds
          }
        );

       console.log(res)
        setAirQuality(res.data.data.current.pollution.aqius);
      } catch (error) {
        setAirQuality(`Please try again: ${error}`);
      }
    }
  };

  return { airQuality, fetchAirQuality };
}

export default useAirQuality;

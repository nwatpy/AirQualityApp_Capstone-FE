import axios from "axios";
import { useState } from "react";

function useAirQuality(coords) {
  const [airQuality, setAirQuality] = useState();

  const fetchAirQuality = async (coords) => {
    if (coords) {
      setAirQuality();
      const { lat, lon } = coords;
      // Uncomment these for additional testing until we implement additional means to get coordinates
      //const lat = "44.0581728";
      //const lon = "-121.3153096";
      try {
        const res = await axios.get(
          `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=1ef3e936-0780-4d79-9b85-91a16493884a`,
          {
            timeout: 10000, // Set a timeout of 10 seconds
          }
        );

        setAirQuality(res.data.data);
      } catch (error) {
        // setAirQuality(`Please try again: ${error}`);
      }
    }
  };

  console.log(airQuality)

  return { airQuality, setAirQuality, fetchAirQuality };
}

export default useAirQuality;

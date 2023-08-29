import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AQISearchContext = createContext({});

const AQISearchProvider = ({ children }) => {
  const [foundAQI, setFoundAQI] = useState();

  const searchForAQI = async (coords) => {
    if (coords) {
      setFoundAQI();
      const { lat, lon } = coords;
      try {
        const res = await axios.get(
          `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=1ef3e936-0780-4d79-9b85-91a16493884a`,
          {
            timeout: 10000, // Set a timeout of 10 seconds
          }
        );

        setFoundAQI(res.data.data);
      } catch (error) {
        console.error(error)
      }
    }
  };


  return (
    <AQISearchContext.Provider value={{ foundAQI, setFoundAQI, searchForAQI }}>
      {children}
    </AQISearchContext.Provider>
  );
};

const useAQISearch = () => {
  let context = useContext(AQISearchContext);
  if (!context) {
    throw new Error(
      "useAQISearch must be used within a AQISearchContext Provider."
    );
  }
  return context;
};

export default AQISearchContext;
export { useAQISearch };
export { AQISearchProvider };

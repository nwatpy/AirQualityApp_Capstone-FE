import Header from "../../components/header/Header";
import { isAuthenticated } from "../../utils/authHelper";
import LocationInput from "../../components/LocationInput/LocationInput";
import useAirQuality from "../../hooks/useAirQuality";
import useBrowserLocation from "../../hooks/useBrowserLocation";
import Aqi from "../../components/Aqi/Aqi";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import useTypedLocation from "../../hooks/useTypedLocation";

function Home(props) {
  // This gets out coordinates from the browser
  const { coords, getBrowserLocation } = useBrowserLocation();
  const { airQuality, fetchAirQuality } = useAirQuality();
  const { typedCoords, getCoords } = useTypedLocation();

  const [typedLocation, setTypedLocation] = useState();

  // When clicking on the location icon, go get coords
  const handleLocationRequest = () => {
    getBrowserLocation();
  };

  // This goes and gets Coordinates for a typed location
  const handleAqiRequest = () => {
    if (typedLocation) {
      getCoords(typedLocation);
    }
  };

  // This handles getting the AQI regardless of where coords came from
  const handleGetAqi = (aqiCoords) => {
    if (aqiCoords) {
      fetchAirQuality(aqiCoords);
    }
  };

  // This gets AQI if we have a typed location
  useEffect(() => {
    if (typedCoords) {
      handleGetAqi(typedCoords);
    }
  }, [typedCoords]);

  // This gets AQI if we have a browser coordinates
  useEffect(() => {
    if (coords) {
      handleGetAqi(coords);
    }
  }, [coords]);

  return (
    <div className="Home">
      <Header isAuthenticated={isAuthenticated()} />
      <Container>
        <LocationInput
          handleAqiRequest={handleAqiRequest}
          handleLocationRequest={handleLocationRequest}
          setTypedLocation={setTypedLocation}
        />
        {airQuality && <Aqi aqi={airQuality} />}
      </Container>
    </div>
  );
}

export default Home;

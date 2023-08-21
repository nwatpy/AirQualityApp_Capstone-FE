import Header from "../../components/header/Header";
import { isAuthenticated } from "../../utils/authHelper";
import LocationInput from "../../components/LocationInput/LocationInput";
import useAirQuality from "../../hooks/useAirQuality";
import useBrowserLocation from "../../hooks/useBrowserLocation";
import Aqi from "../../components/Aqi/Aqi";
import { Container } from "react-bootstrap";

function Home(props) {
  // This gets out coordinates from the browser
  const { coords, getBrowserLocation } = useBrowserLocation();
  const { airQuality, fetchAirQuality } = useAirQuality();

  // When clicking on the location icon, go get coords
  const handleLocationRequest = () => {
    getBrowserLocation();
  };

  // Goes and gets AQI when we have coords
  const handleAqiRequest = () => {
    if (coords) {
      fetchAirQuality(coords);
    }
  };

  return (
    <div className="Home">
      <Header isAuthenticated={isAuthenticated()} />
      <Container>
        <LocationInput 
          handleAqiRequest={handleAqiRequest}
          handleLocationRequest={handleLocationRequest}
          coords={coords}
        />
        {airQuality && <Aqi  aqi={airQuality} />}
      </Container>
    </div>
  );
}

export default Home;

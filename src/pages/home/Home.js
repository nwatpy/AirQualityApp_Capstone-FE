import Header from "../../components/header/Header";
import { isAuthenticated } from "../../utils/authHelper";
import LocationInput from "../../components/LocationInput/LocationInput";
import { AQISearchProvider } from "../../hooks/useAQISearch";
import useBrowserLocation from "../../hooks/useBrowserLocation";
import Aqi from "../../components/Aqi/Aqi";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import useTypedLocation from "../../hooks/useTypedLocation";
import Favorites from "../../components/Favorites/Favorites";
import { FavoritesProvider } from "../../hooks/useFavorites";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import AQISearch from "./AQISearch";

function Home(props) {
  // This gets out coordinates from the browser
  const { coords, getBrowserLocation } = useBrowserLocation();
  const { typedCoords, getCoords } = useTypedLocation();
  const [typedLocation, setTypedLocation] = useState();

  // When clicking on the location icon, go get coords
  const handleLocationRequest = () => {
    getBrowserLocation();
  };

  // This goes and gets Coordinates for a typed location
  const handleAqiRequest = () => {
    if (typedLocation) {
      console.log(typedLocation)
      getCoords(typedLocation);
    }
  };

  console.log(props?.isAuthenticated)
  return (
    <div className="Home">
      <Header isAuthenticated={isAuthenticated} />
      <Container>
        <LocationInput
          handleAqiRequest={handleAqiRequest}
          handleLocationRequest={handleLocationRequest}
          setTypedLocation={setTypedLocation}
        />
        <AQISearchProvider>
          <FavoritesProvider>
            <AQISearch coords={coords} typedCoords={typedCoords} />
            <Favorites />
          </FavoritesProvider>
        </AQISearchProvider>
      </Container>
    </div>
  );
}

export default mustBeAuthenticated(Home);

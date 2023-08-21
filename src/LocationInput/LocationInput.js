import { Form, InputGroup, Button } from "react-bootstrap";
import useBrowserLocation from "./useBrowserLocation";
import { useEffect } from "react";
import useAirQuality from "../AirQuality/useAirQuality";

function LocationInput() {
  // This gets out coordinates from the browser
  const { coords, getBrowserLocation } = useBrowserLocation();
  const { airQuality, fetchAirQuality } = useAirQuality();

  // When clicking on the location icon, go get coords
  const handleLocationRequest = () => {
    getBrowserLocation();
  };

  useEffect(() => {
    console.log(airQuality);
  }, [airQuality]);

  // Goes and gets AQI
  const handleAqiRequest = () => {
    if (coords) {
      fetchAirQuality(coords);
    }
  };

  return (
    <>
      <Form>
        <InputGroup className="p-1">
          <InputGroup.Text id="basic-addon2">
            <img
              onClick={handleLocationRequest}
              className="locationIcon"
              id="locationImage"
              src="/images/location.webp"
              alt="Get current location"
              size="sm"
            />
          </InputGroup.Text>
          <Form.Control
            size="lg"
            placeholder="Location"
            aria-label="Location"
            aria-describedby="basic-addon2"
            value={coords && `${coords.lat}, ${coords.lon}`}
          />
          <InputGroup.Text id="basic-addon2">
            <Button variant="secondary" size="sm" onClick={handleAqiRequest}>
              Go
            </Button>
          </InputGroup.Text>
        </InputGroup>
      </Form>

      <h1>{airQuality && `Your air quality is: ${airQuality}`}</h1>
    </>
  );
}

export default LocationInput;

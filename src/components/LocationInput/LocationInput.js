import { Form, InputGroup, Button } from "react-bootstrap";

import "./locationInput.css";

function LocationInput({ handleAqiRequest, handleLocationRequest, coords }) {
  return (
    <>
      <Form>
        <InputGroup className="mb-3">
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
    </>
  );
}

export default LocationInput;

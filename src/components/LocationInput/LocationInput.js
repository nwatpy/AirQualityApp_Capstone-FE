import { Form, InputGroup, Button } from "react-bootstrap";

import "./locationInput.css";

function LocationInput({
  handleAqiRequest,
  handleLocationRequest,
  setTypedLocation,
}) {
  
  // Handles someone hitting the return key to submit the form
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAqiRequest();
  };
  return (
    <div className="mt-5">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2" className="current-location-finder-icon">
            <img
              onClick={handleLocationRequest}
              className="location-icon"
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
            onChange={(event) => {
              setTypedLocation(event.target.value);
            }}
          />
          <Button variant="secondary" size="md" onClick={handleAqiRequest} id="basic-addon2" className="location-finder-go-button" >
            Go
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default LocationInput;

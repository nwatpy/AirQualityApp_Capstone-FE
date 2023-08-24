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
    <>
      <Form onSubmit={handleSubmit}>
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
            onChange={(event) => {
              setTypedLocation(event.target.value);
            }}
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

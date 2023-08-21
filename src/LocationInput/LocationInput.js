import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

function LocationInput() {
  return (
    <Form>
      <Form.Group className="mb-4">
        <Form.Label>Location*</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>
    </Form>
  );
}

export default LocationInput;

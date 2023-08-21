import "./hamburger.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Hamburger() {
  return (
    <Navbar.Collapse className=" justify-content-end">
      <Nav className="mr-auto ">
        <Nav.Link>
          <Link className="hamburger" to="/">
            Home
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
}

export default Hamburger;

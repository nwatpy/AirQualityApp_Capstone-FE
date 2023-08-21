import "./header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <Navbar collapseOnSelect expand="small" bg="primary" className="mb-3" sticky="top">
      <Container>
        <div className="header p-1 no-wrap d-flex">AirQuality </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Hamburger />
      </Container>
    </Navbar>
  );
}

export default Header;

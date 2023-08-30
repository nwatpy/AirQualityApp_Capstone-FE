import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, withRouter } from "react-router-dom";
import UserNav from "./UserNav";
import "./Header.css";

function Header(props) {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand className="brand" as={Link} to="/">
        <img className="img-size" alt="logo" src="./images/logo.png" />
        AirQuality
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={props.location.pathname} className="ml-auto">
          <UserNav isAuthenticated={props.isAuthenticated} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);

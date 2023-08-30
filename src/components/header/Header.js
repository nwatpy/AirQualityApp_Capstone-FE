import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import UserNav from './UserNav';
import './Header.css'

function Header(props) {

  return (
    <div className="Header mb-3">
      <Navbar expand="lg" bg="light" variant='light' fixed="top">
        <Navbar.Brand className="brand" as={Link} to="/">AirQuality</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={props.location.pathname} className="ml-auto">
            <UserNav
              isAuthenticated={props.isAuthenticated}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);

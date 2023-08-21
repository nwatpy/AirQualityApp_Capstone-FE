import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Container } from "react-bootstrap";
import Header from "./Header/Header";
import LocationInput from "./LocationInput/LocationInput";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<LocationInput/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

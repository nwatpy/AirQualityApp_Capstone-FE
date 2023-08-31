import { Card } from "react-bootstrap";
import AddFavorite from "./AddFavorite";
import "./Aqi.css";
import RefreshFavorite from "./RefreshFavorite";
import Map from "../Map/Map";

function Aqi({ aqi }) {
  const coords = { lat: aqi?.lat, lon: aqi?.lon };
  
  let pollutionLevel = "";
  let healthImplications = "";
  let color = "";
  let aqius =
    aqi.loc_aqi ||
    (aqi.current && aqi.current.pollution && aqi.current.pollution.aqius);

  if (aqius < 51) {
    color = "green";
    pollutionLevel = "Good";
    healthImplications =
      "Air quality is considered satisfactory, and air pollution poses little or no risk";
  } else if (aqius < 101) {
    color = "#e6e600";
    pollutionLevel = "Moderate";
    healthImplications =
      "Air quality is acceptable; however, for some pollutants, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution";
  } else if (aqius < 151) {
    color = "orange";
    pollutionLevel = "Unhealthy for Sensitive Groups";
    healthImplications =
      "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
  } else if (aqius < 201) {
    color = "red";
    pollutionLevel = "Unhealthy";
    healthImplications =
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
  } else if (aqius < 301) {
    color = "purple";
    pollutionLevel = "Very Unhealthy";
    healthImplications =
      "Health warnings of emergency conditions. The entire population is more likely to be affected.";
  } else {
    color = "crimson";
    pollutionLevel = "Hazardous";
    healthImplications =
      "Health alert: everyone may experience more serious health effects.";
  }

  return (
    <Card>
      <Card.Header className="title">
        {aqi.city}, {aqi.state}
        <AddFavorite aqi={aqi} className="ml-auto " />
        
      </Card.Header>
      <Card.Body>
        <Card.Text className="mb-4">
          <h1 style={{ color: color }} className="aqi-header">{aqius}</h1>
          <Card.Subtitle>Air Quality Index</Card.Subtitle>
        </Card.Text>
        
        <Card.Text>
          <strong>Air Pollution Level: </strong>
          {pollutionLevel}
          <br />
          <strong>Health Implications: </strong>
          {healthImplications}
        </Card.Text>
      </Card.Body>
      {(aqi.lat && aqi.lon) && <Map coords={coords}/>}
      <Card.Footer>
        <RefreshFavorite aqi={aqi} />
      </Card.Footer>
    </Card>
  );
}

export default Aqi;

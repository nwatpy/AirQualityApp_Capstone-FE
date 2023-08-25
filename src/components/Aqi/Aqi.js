import { Card } from "react-bootstrap";
import AddFavorite from "./AddFavorite";
import "./Aqi.css";
import RefreshFavorite from "./RefreshFavorite";

function Aqi({ aqi }) {
  let pollutionLevel = "";
  let healthImplications = "";
  let color = "";
  let aqius = aqi.loc_aqi || (aqi.current && aqi.current.pollution && aqi.current.pollution.aqius);

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
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className="mt-2">
            <strong>Air Quality Index</strong> <br /> <br /> {aqi.city}, {aqi.state}
          </Card.Title>
          <AddFavorite aqi={aqi} className="ml-auto" />
        </div>
        <Card.Subtitle className="mb-2 text-muted">
          {(aqi.lat && aqi.lon) ? `${aqi.lat}, ${aqi.lon}` : `${aqi.location.coordinates[1]}, ${aqi.location.coordinates[0]}`}
        </Card.Subtitle>
        <div className="card-bottom-section">
          <Card.Text style={{ width: "70%" }}>
            <h1 style={{ color: color }}>
              {aqius}
            </h1>
            <strong>Air Pollution Level: </strong>
            {pollutionLevel}
            <br />
            <strong>Health Implications: </strong>
            {healthImplications}
          </Card.Text>
          <RefreshFavorite aqi={aqi} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Aqi;
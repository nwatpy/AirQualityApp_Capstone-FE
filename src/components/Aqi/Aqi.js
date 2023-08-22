import { Card } from "react-bootstrap";

function Aqi({ aqi }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          AirQuality for {aqi.city}, {aqi.state}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{aqi.location.coordinates[0]}, {aqi.location.coordinates[1]}</Card.Subtitle>
        <Card.Text>
          <h1>{aqi.current.pollution.aqius}</h1>
          This is considered *insert rating scale based on the number, there are
          descriptions available, for example: 101-150 Members of sensitive
          groups, such as children, the elderly, and people with respiratory or
          heart conditions, may experience health effects. The general public is
          less likely to be affected.
        </Card.Text>
        <Card.Link href="#">Add to Favorites (not implemented) </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Aqi;

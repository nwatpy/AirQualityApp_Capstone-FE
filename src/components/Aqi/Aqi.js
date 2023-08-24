import { Card } from "react-bootstrap";
import AddFavorite from "./AddFavorite";

function Aqi({ aqi }) {
  console.log(aqi)
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className="mt-2">
            {aqi.city}, {aqi.state}
          </Card.Title>
          <AddFavorite aqi={aqi} className="ml-auto" />
        </div>
        <Card.Subtitle className="mb-2 text-muted">
          {aqi.lat}, {aqi.lon}
        </Card.Subtitle>
        <Card.Text>
          <h1>{aqi.loc_aqi}</h1>
          This is considered *insert rating scale based on the number, there are
          descriptions available, for example: 101-150 Members of sensitive
          groups, such as children, the elderly, and people with respiratory or
          heart conditions, may experience health effects. The general public is
          less likely to be affected.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Aqi;

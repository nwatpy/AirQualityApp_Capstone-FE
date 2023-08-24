import { Card } from "react-bootstrap";
import AddFavorite from "./AddFavorite";

function AqiSearch({ aqi }) {
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
          {aqi.location.coordinates[1]}, {aqi.location.coordinates[0]}
        </Card.Subtitle>
        <Card.Text>
          <h1>{aqi?.current?.pollution?.aqius}</h1>
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

export default AqiSearch;

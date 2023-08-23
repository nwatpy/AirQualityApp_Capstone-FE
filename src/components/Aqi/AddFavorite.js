import { Card } from "react-bootstrap";
import { useState } from "react";
import useFavorites from "../../hooks/useFavorites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function AddFavorite({ aqi }) {
  const [isNewFavorite, setFavorite] = useState(true);
  const { addFavorite } = useFavorites();

  const handleAddFavorite = () => {
    setFavorite(!isNewFavorite);

    if (isNewFavorite) {
      console.log("We are adding a favorite")
      addFavorite(
        aqi.city,
        aqi.state,
        aqi.location.coordinates[1],
        aqi.location.coordinates[0]
      );
    } else {
      // delete from favorites
    }
  };

  return (
    <Card.Link
      className={isNewFavorite ? "on" : "off"}
      onClick={handleAddFavorite}
    >
      <FontAwesomeIcon icon={faStar} style={{ marginRight: "0.5rem" }} />
      Add to Favorites{" "}
    </Card.Link>
  );
}

export default AddFavorite;

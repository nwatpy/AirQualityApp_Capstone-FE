import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import {useFavorites} from "../../hooks/useFavorites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function AddFavorite({ aqi }) {
  // Get all favorites
  // look in the favorites to see if it anything matches the AQI
  // Toggle add favorite

  const [isNewFavorite, setFavorite] = useState(true);
  const { addFavorite, favorites } = useFavorites();
  const [isFavorited, setFavorited] = useState(false);

  useEffect(() => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].city === aqi.city && favorites[i].state === aqi.state) {
        setFavorited(true);
        break;
      }
    }
  }, [favorites, aqi]);

  const handleAddFavorite = () => {
    setFavorite(!isNewFavorite);

    if (isNewFavorite) {
      console.log("We are adding a favorite");
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
    <div>
      {isFavorited ? (
        <span>
          <FontAwesomeIcon icon={faStar} style={{ marginRight: "0.5rem" }} />
          Favorited
        </span>
      ) : (
        <Card.Link
          className={isNewFavorite ? "on" : "off"}
          onClick={handleAddFavorite}
        >
          <FontAwesomeIcon icon={faStar} style={{ marginRight: "0.5rem" }} />
          Add to Favorites
        </Card.Link>
      )}
    </div>
  );
}

export default AddFavorite;

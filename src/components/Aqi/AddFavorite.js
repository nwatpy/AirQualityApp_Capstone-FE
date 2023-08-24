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
  const { addFavorite, getFavorites, deleteFavorite, favorites } = useFavorites();
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
      addFavorite(aqi);
    } else {
      // delete from favorites
    }
  };

  const handleDeleteFavorite = async (e) => {
    console.log("We are deleting a favorite");
    await deleteFavorite(e.currentTarget.id);
    getFavorites();
  }

  return (
    <div>
      {isFavorited ? (
        <Card.Link
        onClick={handleDeleteFavorite}
        id = {aqi._id}
        >
        <FontAwesomeIcon icon={faStar} style={{ marginRight: "0.5rem", color: "red" }} />
        Favorited
        </Card.Link>
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

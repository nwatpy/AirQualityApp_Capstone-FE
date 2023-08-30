import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function AddFavorite({ aqi }) {
  const [isNewFavorite, setFavorite] = useState(true);
  const { addFavorite, getFavorites, deleteFavorite, favorites } =
    useFavorites();
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
      addFavorite(aqi);
      toast.success("Favorite added", { theme: "light", autoClose: 2000, position: toast.POSITION.TOP_CENTER });
    }
  };

  const handleDeleteFavorite = async (e) => {
    await deleteFavorite(e.currentTarget.id);
    getFavorites();
    toast.success("Favorite removed", { theme: "light", autoClose: 2000, position: toast.POSITION.TOP_CENTER });
  };

  return (
    <>
      {isFavorited ? (
        <Card.Link
          onClick={handleDeleteFavorite}
          id={aqi._id}
          className="button-link favorite"
          style={{ color: "#707070" }}
        >
          <FontAwesomeIcon
            icon={faStar}
            style={{ marginRight: "0.5rem", color: "#707070" }}
          />
          Remove favorite
        </Card.Link>
      ) : (
        <Card.Link
          className={isNewFavorite ? "on button-link favorite" : "off favorite"}
          onClick={handleAddFavorite}
        >
          <FontAwesomeIcon icon={faStar} style={{ marginRight: "0.5rem" }} />
          Add favorite
        </Card.Link>
      )}
    </>
  );
}

export default AddFavorite;

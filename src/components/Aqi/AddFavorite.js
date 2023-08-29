import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import {useFavorites} from "../../hooks/useFavorites";
import { ToastContainer, toast } from 'react-toastify';


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
      toast.success('favorite added', { theme: "colored", autoClose: 3000});
    } else {
      // delete from favorites
    }
  };

  const handleDeleteFavorite = async (e) => {
    console.log("We are deleting a favorite");
    await deleteFavorite(e.currentTarget.id);
    getFavorites();
    toast.success('favorite removed', { theme: "colored", autoClose: 3000});
  }

  return (
    <>
    <div>
      {isFavorited ? (
        <Card.Link 
          onClick={handleDeleteFavorite} 
          id={aqi._id} 
          className="button-link" 
          style={{color: "#707070"}}
        >
      
        Remove favorite
        </Card.Link>
      ) : (
        <Card.Link
          className={isNewFavorite ? "on button-link" : "off"}
          onClick={handleAddFavorite}
        >
   
          Add favorite
        </Card.Link>
      )}
    </div>
    </>
  );
}

export default AddFavorite;

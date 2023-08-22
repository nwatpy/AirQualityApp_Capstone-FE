import axios from "axios";
import { useState } from "react";

function useAddFavorites() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = async (city, state, lat, lon) => {
    try {
      const body = {
        lat: lat,
        lon: lon,
        favoriteLocation: `${city}, ${state}`,
      };
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/favorites/saveFavorite`, body);
      setFavorites([...body, res.data]);
    } catch (error) {
      setFavorites("There was an error:" + error);
    }
  };

  return { favorites, addFavorite };
}

export default useAddFavorites;

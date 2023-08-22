import axios from "axios";
import { useState } from "react";

function useAddFavorites() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = async (city, state, lat, lon) => {
    try {
      const res = await axios.post('/api/favorites/saveFavorite', { city, state, lat, lon });
      setFavorites([...favorites, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return { favorites, addFavorite };
}

export default useAddFavorites;
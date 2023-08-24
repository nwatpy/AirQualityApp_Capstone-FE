import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext({});

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState();

  const addFavorite = async (city, state, lat, lon) => {
    try {
      const body = {
        lat: lat,
        lon: lon,
        state: state,
        city: city,
        favoriteLocation: `${city}, ${state}`,
      };
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/favorites/saveFavorite`,
        body
      );
      setFavorites([...favorites, res.data]);
    } catch (error) {
      setFavorites("There was an error:" + error);
    }
  };

  const getFavorites = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/favorites/getFavorites`
      );
      const favorites = res.data;
      const updatedFavorites = [];
      await Promise.all(
        favorites.map(async (favorite) => {
          const resp = await axios.get(`https://api.airvisual.com/v2/nearest_city?lat=${favorite.lat}&lon=${favorite.lon}&key=1ef3e936-0780-4d79-9b85-91a16493884a`, {timeout: 10000});
          const updatedFavorite = resp.data.data;
          updatedFavorites.push(updatedFavorite)
        })
      )
      setFavorites(updatedFavorites);
    } catch (error) {
      setFavorites("There was an error:" + error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, getFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => {
  let context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavorites must be used within a FavoritesContext Provider."
    );
  }
  return context;
};

export default FavoritesContext;
export { useFavorites };
export { FavoritesProvider };

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext({});

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState();

  const addFavorite = async (aqi) => {
    console.log(aqi)
    try {
      const body = {
        loc_aqi: aqi.current.pollution.aqius,
        lat: aqi.location.coordinates[1],
        lon: aqi.location.coordinates[0],
        state: aqi.state,
        city: aqi.city,
        favoriteLocation: `${aqi.city}, ${aqi.state}`,
        lastRefreshed: Date.now()
      };
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/favorites/saveFavorite`,
        body
      );
      setFavorites([...favorites, body]);
    } catch (error) {
    }
  };

  const refreshFavorite = async (aqi) => {
    const resp = await axios.get(`https://api.airvisual.com/v2/nearest_city?lat=${aqi.lat}&lon=${aqi.lon}&key=1ef3e936-0780-4d79-9b85-91a16493884a`, {timeout: 10000});
    const updatedAqi = resp.data.data;
    const body = {
      loc_aqi: updatedAqi.current.pollution.aqius,
      lat: updatedAqi.location.coordinates[1],
      lon: updatedAqi.location.coordinates[0],
      state: updatedAqi.state,
      city: updatedAqi.city,
      favoriteLocation: `${updatedAqi.city}, ${updatedAqi.state}`,
      lastRefreshed: Date.now()
    };
    const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/favorites/updateFavorite/${aqi._id}`, body);
    const updatedFavorite = res.data;
    const updatedFavorites = favorites.filter((favorite) => favorite._id !== updatedFavorite._id);
    updatedFavorites.push(updatedFavorite)
    setFavorites(updatedFavorites)
  }

  const getFavorites = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/favorites/getFavorites`
      );
      setFavorites(res.data);
    } catch (error) {
      setFavorites("There was an error:" + error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const deleteFavorite = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/favorites/deleteFavorite/${id}`
      );
    } catch (error) {
    }
  };


  return (
    <FavoritesContext.Provider value={{ favorites, getFavorites, addFavorite, deleteFavorite, refreshFavorite }}>
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

import { useFavorites } from "../../hooks/useFavorites";
import Aqi from "../Aqi/Aqi";

const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div>
      {favorites.length > 0 && (
        <>
          {favorites.map((aqi) => {
            return (
              <div style={{ marginBottom: "10px" }}>
                <Aqi aqi={aqi} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Favorites;

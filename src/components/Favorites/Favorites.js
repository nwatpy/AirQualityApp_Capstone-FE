import { useFavorites } from '../../hooks/useFavorites';
import Aqi from '../Aqi/Aqi';

const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div style={{margin: "50px 0 50px 0"}}>
      <h1>Favorites</h1>
      {favorites && favorites.map((aqi) => {
        return (
          <div style={{marginBottom:"10px"}}>
            <Aqi aqi={aqi} />
          </div>
        )
      })
      }
    </div>
  )
}

export default Favorites

// return (
//   favorites && favorites.map(({city, state, favoriteLocation, lat, lon}) => {
//     const location = {coordinates: {lat, lon}};
//     console.log(city, state, favoriteLocation, lat, lon)
//     return (<Aqi aqi={{city, state, favoriteLocation, location}} />)
//   }
//   )
// )
import Table from 'react-bootstrap/Table';
import {useFavorites}  from '../../hooks/useFavorites';

const Favorites = () => {
    const { favorites } = useFavorites();
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Favorite Name</th>
          </tr>
        </thead>
        <tbody>
            {favorites && favorites.map(({city, state, favoriteLocation}) => (
                <tr>
                    <td>{city}</td>
                    <td>{state}</td>
                    <td>{favoriteLocation}</td>
                </tr>
            ))}
        </tbody>
      </Table>
    )
}

export default Favorites
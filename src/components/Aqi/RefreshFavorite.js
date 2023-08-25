import { Card } from "react-bootstrap"
import { useFavorites } from "../../hooks/useFavorites"

const RefreshFavorite = ({ aqi }) => {
    const { refreshFavorite } = useFavorites();

    return (
        <div>
            <Card.Text style={{ fontSize: "90%" }}>
                {new Date(aqi.lastRefreshed).toLocaleString()}
            </Card.Text>
            <Card.Link onClick={() => refreshFavorite(aqi)} style={{ float: "right", marginBottom: "15px" }}>
                Refresh Data
            </Card.Link>
        </div>
    )
}

export default RefreshFavorite
import { Card } from "react-bootstrap";
import { useFavorites } from "../../hooks/useFavorites";
import { toast } from "react-toastify";

const RefreshFavorite = ({ aqi }) => {
  const { refreshFavorite } = useFavorites();

  const handleRefresh = () => {
    refreshFavorite(aqi);
    toast.success(`Refreshed ${aqi.city}, ${aqi.state}`, {
      theme: "light",
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const dateOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <div className="refresh">
      {aqi.lastRefreshed && (
        <>
          Last Updated:{" "}
          {new Date(aqi.lastRefreshed).toLocaleString("us-en", dateOptions)}
          <Card.Link onClick={handleRefresh} className="button-link pl-2">
            Refresh Data
          </Card.Link>
        </>
      )}
    </div>
  );
};

export default RefreshFavorite;

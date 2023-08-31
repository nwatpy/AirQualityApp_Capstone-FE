import React, { useEffect } from "react";
import Aqi from "../../components/Aqi/Aqi";
import { useAQISearch } from "../../hooks/useAQISearch";

const AQISearch = ({coords, typedCoords}) => {
    const { foundAQI, searchForAQI } = useAQISearch();

    // This handles getting the AQI regardless of where coords came from
    const handleGetAqi = async (aqiCoords) => {
        if (aqiCoords) {
            await searchForAQI(aqiCoords);
        }
    };

    // This gets AQI if we have a typed location
    useEffect(() => {
        if (typedCoords) {
            handleGetAqi(typedCoords);
        }
    }, [typedCoords]);

    // This gets AQI if we have a browser coordinates
    useEffect(() => {
        if (coords) {
            handleGetAqi(coords);
        }
    }, [coords]);

    return (
        foundAQI ? <Aqi aqi={foundAQI} /> : null
    )
}

export default AQISearch
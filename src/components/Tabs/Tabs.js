import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useFavorites } from "../../hooks/useFavorites";
import AqiInformation from "../AqiInformation/AqiInformation";
import Favorites from "../Favorites/Favorites";
import "./Tabs.css";

const AQITabs = () => {
  const { favorites } = useFavorites();

  return (
    <Tabs
      id="uncontrolled-tab-example"
      className="mb-3 mt-5"
    >
      {favorites.length > 0 &&
        <Tab 
          eventKey="Favorites" 
          title="Favorites" 
          className="favorites-tabitem"
          >
          <Favorites />
        </Tab>
      }
      <Tab
        eventKey="AQIInformation"
        title="AQI Information"
        className="aqiinformation-tabitem"
      >
        <AqiInformation />
      </Tab>
    </Tabs>
  );
};

export default AQITabs;

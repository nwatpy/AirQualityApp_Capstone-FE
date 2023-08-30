import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AqiInformation from '../AqiInformation/AqiInformation';
import Favorites from '../Favorites/Favorites';
import "./Tabs.css";

const AQITabs = () => {
    return (
        <Tabs
        defaultActiveKey="Favorites"
        id="uncontrolled-tab-example"
        className="mb-3 mt-5"
        >
        <Tab eventKey="Favorites" title="Favorites" className="favorites-tabitem">
            <Favorites />
        </Tab>
        <Tab eventKey="AQIInformation" title="AQI Information" className="aqiinformation-tabitem">
            <AqiInformation />
        </Tab>
        </Tabs>
  );
}

export default AQITabs;
import Table from 'react-bootstrap/Table';

const AqiLevels = [
    {
        color: "green",
        levelOfConcern: "Good",
        valuesOfIndex: "0 - 50",
        description: "Air quality is satisfactory, and air pollution poses little or no risk."
    },
    {
        color: "#c4cc35",
        levelOfConcern: "Moderate",
        valuesOfIndex: "51 - 100",
        description: "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."
    },
    {
        color: "orange",
        levelOfConcern: "Unhealthy for Sensitive Groups",
        valuesOfIndex: "101 - 150",
        description: "Members of sensitive groups may experience health effects. The general public is less likely to be affected."
    },
    {
        color: "red",
        levelOfConcern: "Unhealthy",
        valuesOfIndex: "151 - 200",
        description: "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."
    },
    {
        color: "purple",
        levelOfConcern: "Very Unhealthy",
        valuesOfIndex: "201 - 300",
        description: "Health alert: The risk of health effects is increased for everyone."
    },
    {
        color: "maroon",
        levelOfConcern: "Hazardous",
        valuesOfIndex: "301 and higher",
        description: "Health warning of emergency conditions: everyone is more likely to be affected."
    }
]

const AqiInformation = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Levels of Concern</th>
          <th>Values of Index</th>
          <th>Description of Air Quality</th>
        </tr>
      </thead>
      <tbody>
        {AqiLevels.map(({color, levelOfConcern, valuesOfIndex, description}) => (
            <tr style={{backgroundColor: color, color: "white"}}>
                <td>{levelOfConcern}</td>
                <td>{valuesOfIndex}</td>
                <td>{description}</td>
            </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AqiInformation;
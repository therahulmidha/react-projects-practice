import { useEffect, useState } from "react";
import "./App.css";
import { Chart } from "./components/Charts";
let isFirstRender = true;
function App() {
  const [chartData, setChartData] = useState({});
  // useEffect(() => {

  // }, []);
  const getChartData = () => {

    // Ajax calls here
    setChartData({
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets: [
        {
          label: 'Population',
          data: [
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }
      ]
    });
  }
// console.log(isFirstRender);
  if (isFirstRender) {
    isFirstRender = false;
    getChartData();
  }
  // console.log(chartData)
  return (<div className="App">
    <Chart chartData={chartData} location="Massachusetts" legendPosition="bottom" />
  </div>);
}

export default App;

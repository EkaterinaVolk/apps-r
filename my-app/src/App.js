import './App.css';
import { Chart } from "react-google-charts";


export const data = [
  ["Country", "Popularity"],
  ["Germany", 83],
  ["United States", 331],
  ["Brazil", 214],
  ["Canada", 38],
  ["France", 67],
  ["Russia", 150],
];


export function App() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="500px"
      data={data}
    />
  );
}



export default App;

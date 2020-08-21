import React from "react";
import { Doughnut } from "react-chartjs-2";
import Styles from "./chart.module.css";
import ChartList from "./ChartList";

const Chart = () => {
  const data = {
    labels: ["Food", "Water", "Internet", "Repairs", "Luxury"],
    datasets: [
      {
        label: "Sample",
        data: [6, 2, 4, 3, 5],
        backgroundColor: ["#2600f5", "#afaeae", "#e3a23c", "#afaeae"],
      },
    ],
  };

  return (
    <div className={Styles.chartContainer}>
      <div className={Styles.chart}>
        <Doughnut data={data} />
      </div>
      <ChartList />
    </div>
  );
};

export default Chart;

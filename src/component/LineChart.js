import React, { useContext } from "react";
import HorizontalBarChart from "./BarHorizontalChart";
import { AppContext } from "../App";

const LineChart = ({ data }) => {
  const {data1 }= useContext(AppContext)
  
  return (
    <div className="chart-container">
      <HorizontalBarChart
        data={[
          { label: "English", value: 30 },
          { label: "Arts", value: 45 },
          { label: "Math", value: 20 },
          { label: "Phys", value: 60 },
          { label: "Science", value: 82 },
        ]}
      />
    </div>
  );
};

export default LineChart;

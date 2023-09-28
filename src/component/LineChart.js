import React from "react";
import HorizontalBarChart from "./BarHorizontalChart";

const LineChart = ({ data }) => {
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

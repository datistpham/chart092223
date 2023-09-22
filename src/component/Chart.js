import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import ScatterChart from "./ScatterChart";

const ChartGrid = ({ data }) => {
  return (
    <div className="chart-grid-container">
      <div className="placeholder-sidebar"></div>
      <div className="wrap-chart-grid">
        <div className="chart-grid">
          <div className="chart-item">
            <BarChart data={data} />
          </div>
          <div className="chart-item">
            <LineChart data={data} />
          </div>
          <div className="chart-item">
            <PieChart data={data} />
          </div>
          <div className="chart-item">
            <ScatterChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartGrid;

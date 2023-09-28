import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
// import ScatterChart from "./ScatterChart";
import DonutChart from "./DonutChart";
import CirclChartScore from "./componentscore/CirclChartScore";
import SelectYear from "./filter/SelectYear";
import SelectGrade from "./filter/SelectGrade";
import CountStudent from "./filter/CountStudent";
import ListStudent from "./student/ListStudent";
import StatsSubject from "./StatsSubject";
import HorizontalBarChart from "./BarHorizontalChart";

const ChartGrid = ({ data }) => {
  // const grade1Percentage = 25;
  return (
    <div className="chart-grid-container">
      <div className="placeholder-sidebar"></div>
      <div className="wrap-chart-grid">
        <div
          className="wrap-chart-subgrid"
          style={{ width: "100%", display: "flex" }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: 20,
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ width: "100%" }}>
                  <SelectYear />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ width: "100%" }}>
                  <SelectGrade />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ width: "100%" }}>
                  <CountStudent />
                </div>
              </div>
            </div>
            <div className="chart-grid">
              {/* <div className="chart-item">
                <BarChart data={data} />
              </div> */}
              <div className="chart-item">
                <LineChart data={data} />
              </div>
              {/* <div className="chart-item">
                <PieChart data={data} />
              </div> */}
              <div className="chart-item">
                <DonutChart data={data} />
              </div>
            </div>
            <div style={{ width: "100%", maxWidth: "calc(100%)" }}>
              <StatsSubject
                data={[
                  { group: "Math", Nitrogen: 50, normal: 20, stress: 10 },
                  { group: "Physics", Nitrogen: 45, normal: 15, stress: 5 },
                  { group: "Science", Nitrogen: 55, normal: 10, stress: 8 },
                  { group: "History", Nitrogen: 40, normal: 18, stress: 12 },
                  { group: "English", Nitrogen: 60, normal: 12, stress: 6 },
                ]}
              />
            </div>
          </div>
          {/*  */}
          <div style={{ width: 250 }}>
            <div
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 12,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "calc(100vh - 78px)",
                overflow: "auto",
              }}
            >
              <CirclChartScore
                value={85}
                min={0}
                max={100}
                title={"Math"}
                color={"#E63946"}
              />
            </div>
            <div
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 12,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "calc(100vh - 78px)",
                overflow: "auto",
              }}
            >
              <CirclChartScore
                value={85}
                min={0}
                max={100}
                title={"Math"}
                color={"#E63946"}
              />
            </div>
            <div
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 12,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "calc(100vh - 78px)",
                overflow: "auto",
              }}
            >
              <CirclChartScore
                value={85}
                min={0}
                max={100}
                title={"Math"}
                color={"#E63946"}
              />
            </div>
            <div
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 12,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "calc(100vh - 78px)",
                overflow: "auto",
              }}
            >
              <CirclChartScore
                value={85}
                min={0}
                max={100}
                title={"Math"}
                color={"#E63946"}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "calc(100%)",
            marginBottom: 12,
          }}
        >
          <ListStudent />
        </div>
      </div>
     
    </div>
  );
};

export default ChartGrid;

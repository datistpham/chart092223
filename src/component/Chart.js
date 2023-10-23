import React, { useState } from "react";
// import BarChart from "./BarChart";
import LineChart from "./LineChart";
// import PieChart from "./PieChart";
// import ScatterChart from "./ScatterChart";
import DonutChart from "./DonutChart";
import CirclChartScore from "./componentscore/CirclChartScore";
import SelectYear from "./filter/SelectYear";
import SelectGrade from "./filter/SelectGrade";
import CountStudent from "./filter/CountStudent";
import ListStudent from "./student/ListStudent";
import StatsSubject from "./StatsSubject";
// import HorizontalBarChart from "./BarHorizontalChart";
// import GatherChart from "./student/GatherChart";
import TestChart from "./student/TestChart";
import GpaHistogram from "./GPAHistogram";
import TestChart2 from "./student/TestChart2";
// import NewChart1210N from "./student/NewChart1210N";

const ChartGrid = ({ data }) => {
  // const grade1Percentage = 25;
  const [toggle, setToggle]= useState(false)
  const handleToggle= ()=> {
    setToggle(!toggle)
  }

  const gpaData = [
    { key: 'k19', value: 3.2 },
    { key: 'k20', value: 3.5 },
    { key: 'k21', value: 3.8 },
    { key: 'k22', value: 3.4 },
    { key: 'k23', value: 3.1 },
    // Thêm các dữ liệu khác nếu cần thiết
  ];

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
                  <SelectGrade  />
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
              {
                toggle=== false &&
                <StatsSubject
                  toggle={toggle}
                  handleToggle={handleToggle}
                  data={[
                    { group: "Math", Nitrogen: 50, normal: 20, stress: 10 },
                    { group: "Physics", Nitrogen: 45, normal: 15, stress: 5 },
                    { group: "Science", Nitrogen: 55, normal: 10, stress: 8 },
                    { group: "History", Nitrogen: 40, normal: 18, stress: 12 },
                    { group: "English", Nitrogen: 60, normal: 12, stress: 6 },
                  ]}
                />
              }
              {/*  */}
              {
                toggle=== true &&
                <TestChart2
                  toggle={toggle}
                  handleToggle={handleToggle}
                  data={[
                    { group: "Math", Nitrogen: 50, normal: 20, stress: 10 },
                    { group: "Physics", Nitrogen: 45, normal: 15, stress: 5 },
                    { group: "Science", Nitrogen: 55, normal: 10, stress: 8 },
                    { group: "History", Nitrogen: 40, normal: 18, stress: 12 },
                    { group: "English", Nitrogen: 60, normal: 12, stress: 6 },
                  ]}
                />
              }
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
        {/* <div
          style={{
            width: "100%",
            maxWidth: "calc(100%)",
            marginBottom: 12,
          }}
        >
          <GatherChart />

        </div> */}
        {/* <div
          style={{
            width: "100%",
            maxWidth: "calc(100%)",
            marginBottom: 12,
          }}
        >
          <NewChart1210N />
          
        </div> */}
        {/*  */}
        <div
          style={{
            width: "100%",
            maxWidth: "calc(100%)",
            marginBottom: 12,
          }}
        >
          <TestChart />
          
        </div>
        {/*  */}
        <div
          style={{
            width: "100%",
            maxWidth: "calc(100%)",
            marginBottom: 12,
          }}
        >
          <TestChart2 />
          
        </div>
        {/*  */}
        <div
          style={{
            width: "100%",
            maxWidth: "calc(100%)",
            marginBottom: 12,
          }}
        >
          <h1 style={{marginBottom: 12}}>GPA Histogram</h1>
          <GpaHistogram data={gpaData} />
          
        </div>
        {/*  */}
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

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
import Chart3 from "./Chart3";
import StatsSubject2 from "./StatsSubject2";
import StatsSubject3 from "./StatsSubject3";
import TableHoverCharts from "./components/TableHoverChart";
// import NewChart1210N from "./student/NewChart1210N";

const ChartGrid = ({ data }) => {
  // const grade1Percentage = 25;
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  function createData(course, expected_sem, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem_above) {
    return { course, expected_sem, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem_above };
  }

  const rows = [
    createData("DSA", "Sem 2", "95%", "87%", "88%", "92%", "100%", "96%", "", "", "", ""),
    createData("PPL", "Sem 1", "99%", "88%", "91%", "100%", "89%", "95%", "", "", "", ""),
    createData("CA", "Sem 1", "86%", "90%", "87%", "98%", "100%", "92%", "87%", "89%", "95%", "100%"),

  ];

  const rows1 = [
    createData("Algorithms", "Sem 2", "90%", "88%", "97%", "89%", "93%", "100%", "", "", "", ""),
    createData("Database", "Sem 1", "85%", "92%", "95%", "86%", "100%", "91%", "", "", "", ""),
    createData("Networking", "Sem 1", "95%", "89%", "87%", "96%", "88%", "99%", "90%", "86%", "100%", "88%"),
  ];

  const rows2 = [
    createData("Operating Systems", "Sem 2", "88%", "96%", "91%", "89%", "92%", "100%", "", "", "", ""),
    createData("Software Engineering", "Sem 1", "97%", "89%", "95%", "88%", "100%", "91%", "", "", "", ""),
    createData("Machine Learning", "Sem 1", "90%", "88%", "96%", "92%", "87%", "99%", "94%", "89%", "100%", "86%"),
  ];

  const [row, setRow] = useState(rows)

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
              <Chart3 />
            </div>
            <div style={{ width: "100%", maxWidth: "calc(100%)" }}>
              {
                toggle === false &&
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
                toggle === true &&
                <StatsSubject2
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
          <h1 style={{ marginBottom: 12 }}>GPA Histogram</h1>
          <GpaHistogram data={gpaData} />

        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "calc(100%)",
            marginBottom: 12,
          }}
        >
          <h1 style={{ marginBottom: 12 }}>G-am</h1>
          {/* <StatsSubject2 data={gpaData} handleToggle={handleToggle} /> */}
          <StatsSubject3 setRow={setRow} rows={rows} rows2={rows2} rows1={rows1} handleToggle={handleToggle} />
        </div>
        {/*  */}
        <div
          style={{
            width: "100%",
            maxWidth: "calc(100%)",
            marginBottom: 12,
          }}
        >
          {/* <ListStudent /> */}
          <TableHoverCharts rows={row} />
        </div>
      </div>

    </div>
  );
};

export default ChartGrid;

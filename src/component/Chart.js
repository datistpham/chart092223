import React, { useContext, useEffect, useState } from "react";
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
import EnrollmentChart from "./EnrollmentChart";
import CurriculumChart from "./CurriculumChart";
import { AppContext } from "../App";
import { PieChart } from "react-d3-components";
import * as d3 from "d3"
import _ from "lodash";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import NewChart1210N from "./student/NewChart1210N";

const ChartGrid = ({ data }) => {

  const [major, setMajor] = useState("CS")
  const [year, setYear] = useState(2018)
  const [sem, setSem] = useState(1)
  const handleChange = (e) => {
    setMajor(e.target.value)
  }
  const handleChangeYear = (e) => {
    setYear(e.target.value)
  }
  const handleChangeSem = (e) => {
    setSem(e.target.value)
  }

  // const grade1Percentage = 25;
  const [totalEnrollment, setTotalEnrollment] = useState([])
  const { data2 } = useContext(AppContext)
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

  useEffect(() => {
    function mergeEnrollments(data) {
      const enrollmentCounts = {};

      data.forEach((item) => {
        const { id, enrollment } = item;
        const key = `${enrollment}`;

        if (!enrollmentCounts[key]) {
          enrollmentCounts[key] = { enrollment, count: 1 };
        } else {
          enrollmentCounts[key].count++;
        }
      });

      const result = Object.values(enrollmentCounts).map(({ enrollment, count }) => ({
        enrollment,
        count,
      }));

      return result;
    }

    const datax = data2.filter(item => item.id.includes('IT' + major.toUpperCase())); // Thay thế bằng mảng dữ liệu thực tế của bạn
    const result = mergeEnrollments(datax);

    setTotalEnrollment(result)
    console.log("number count", result);
  }, [data2, major])

  const tooltipHtml = (x, y, z) => {
    console.log(x, y);
    return (
      <div>
        <strong>{x}</strong>
        &nbsp;
        &nbsp;
        &nbsp;
        <strong>Count:</strong> {y}
      </div>
    );
  };

  const tooltipHtml2 = (x, y, z) => {
    console.log(x, y);
    return (
      <div>
        <strong>Count:</strong> {y} ({Math.ceil(y / data2.filter(item => item.id.includes('IT' + major.toUpperCase()))?.length * 100)} %)
      </div>
    );
  };

  return (
    <div className="chart-grid-container">
      <div className="placeholder-sidebar"></div>
      <div className="wrap-chart-grid">
        <div
          className="wrap-chart-subgrid"
          style={{ width: "100%", display: "flex" }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ width: "100%", backgroundImage: `url("https://res.cloudinary.com/cockbook/image/upload/v1704760435/single/logo-1_r7garg.jpg")`, backgroundSize: "400px 200px", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
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
                <div style={{ width: "100%" }}>
                  <div style={{ textAlign: "center", margin: 20, fontSize: 24, padding: "20px 60px", border: "1px solid #e7e7e7" }}>{major}</div>
                </div>
                {/* <div style={{ flex: 1 }}>
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
              </div> */}
              </div>
              {/* <div className="chart-grid">
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
                <DonutChart data={data} />
              </div>
            </div> */}
              {/* <div style={{ width: "100%", maxWidth: "calc(100%)" }}>
              <Chart3 />
            </div> */}
              <div style={{ width: '100%', display: "flex", gap: 30 }}>
                <div style={{ flex: 1 }}>
                  <div>Number of students: {_.sumBy(totalEnrollment, function (e) { return parseInt(e.count) })}</div>
                  <PieChart
                    data={{
                      label: "Total enrollment",
                      values: totalEnrollment?.filter(item => parseInt(item.enrollment) > 10)?.map(item => ({ x: `K${item.enrollment}`, y: item.count }))
                    }}
                    width={600}
                    height={400}
                    margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
                    sort={d3.ascending}
                    tooltipHtml={tooltipHtml}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ textAlign: "left", margin: "12px 0" }}>Select major</div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Major</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={major}
                        label="Major"
                        onChange={handleChange}
                      >
                        <MenuItem value={"CE"}>CE</MenuItem>
                        <MenuItem value={"CS"}>CS</MenuItem>
                        <MenuItem value={"DS"}>DS</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <div style={{ textAlign: "left", margin: "12px 0" }}>Select year</div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Year</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year}
                        label="Year"
                        onChange={handleChangeYear}
                      >
                        <MenuItem value={2018}>2018</MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <div style={{ textAlign: "left", margin: "12px 0" }}>Select semester</div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Sem</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sem}
                        label="Sem"
                        onChange={handleChangeSem}
                      >
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 20, fontWeight: "600", margin: "20px 0" }}>Average GPA of {major} field</div>
                  <PieChart
                    data={{
                      label: "Pass & Failed",
                      values: [{ x: "Pass", y: data2.filter(item => item.id.includes('IT' + major.toUpperCase())).filter(item => item.score >= 50)?.length }, { x: "Failed", y: data2.filter(item => item.id.includes('IT' + major.toUpperCase())).filter(item => item.score < 50)?.length }]
                    }}
                    width={600}
                    height={400}
                    margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
                    sort={d3.ascending}
                    tooltipHtml={tooltipHtml2}
                  />
                  {console.log("xxx", data2.filter(item => item.id.includes('IT' + major.toUpperCase())).filter(item => item.score < 50)?.length)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ textAlign: "left", margin: "12px 0" }}>Select major</div>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Major</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={major}
                          label="Major"
                          onChange={handleChange}
                        >
                          <MenuItem value={"CE"}>CE</MenuItem>
                          <MenuItem value={"CS"}>CS</MenuItem>
                          <MenuItem value={"DS"}>DS</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <div style={{ textAlign: "left", margin: "12px 0" }}>Select year</div>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={year}
                          label="Year"
                          onChange={handleChangeYear}
                        >
                          <MenuItem value={2018}>2018</MenuItem>
                          <MenuItem value={2019}>2019</MenuItem>
                          <MenuItem value={2020}>2020</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <div style={{ textAlign: "left", margin: "12px 0" }}>Select semester</div>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sem</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={sem}
                          label="Sem"
                          onChange={handleChangeSem}
                        >
                          <MenuItem value={"1"}>1</MenuItem>
                          <MenuItem value={"2"}>2</MenuItem>
                          <MenuItem value={"3"}>3</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/* <div style={{ width: 250 }}>
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
          </div> */}
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
      </div>
    </div>
  );
};

export default ChartGrid;

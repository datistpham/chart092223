import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import FilterByYear from "./student/NewChart1210N/FilterByYear";
import { Button } from "@mui/material";
import FilterBySubject from "./student/NewChart1210N/FilterBySubject";
const StatsSubject = (props) => {
  const svgRef = useRef();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [hoveredData, setHoveredData] = useState(null);

  const handleMouseOver = (d) => {
    setHoveredData(d);
  };

  const handleMouseOut = () => {
    setHoveredData(null);
  };
  const tData = [
    { name: "Year 1", score1: 22, score2: 19, score3: 18, score4: 21 },
    { name: "Year 2", score1: 37, score2: 41, score3: 42, score4: 38 },
    { name: "Year 3", score1: 72, score2: 71, score3: 65, score4: 67 },
    { name: "Year 4", score1: 100, score2: 97, score3: 95, score4: 94 },
  ];
  const dashedLineData = [
    { name: "Year 1", score1: 20, x: 0  },
    { name: "Year 2", score1: 40 },
    { name: "Year 3", score1: 70 },
    { name: "Year 4", score1: 100, x: 880 },
  ];
  const [data, setData] = useState([
    { name: "Year 1", score1: 22, score2: 19, score3: 18, score4: 21 },
    { name: "Year 2", score1: 37, score2: 41, score3: 42, score4: 38 },
    { name: "Year 3", score1: 72, score2: 71, score3: 65, score4: 67 },
    { name: "Year 4", score1: 100, score2: 97, score3: 95, score4: 94 },
  ]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  useEffect(() => {
    // 1. Set canvas margins
    const margin = {
      top: 50,
      right: 50,
      bottom: 80,
      left: 70,
    };
    const width = 1000 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // const color = d3.scaleOrdinal(d3.col);

    // 2. Set x and y scales
    const xScale = d3.scaleBand().range([0, width]);
    const yScale = d3.scaleLinear().range([height, 0]);

    // 3. Create svg object
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();
    const chart = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Mẫu dữ liệu

    // parseInt data
    data.forEach(function (d) {
      d.score1 = parseInt(d.score1);
      d.score2 = parseInt(d.score2);
      d.score3 = parseInt(d.score3);
    });

    // Use JS to sort array by score
    // data = data.sort(function(a, b) {
    //   return a.score1 - b.score1
    // });
    const color = ["orange", "yellow", "orange", "yellow"];
    // Scale axis based on data
    xScale.domain(data.map((d) => d.name));
    yScale.domain([0, 100]);

    // Create new bar groups appending data and setting starting y index position
    const barWidth = width / data.length / 5;

    const bar = chart
      .selectAll(".bar1")
      .data(data, (d) => d.score1)
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(${i * 5 * barWidth}, 0)`)
      .attr("class", "bar1");

    const bar2 = chart
      .selectAll(".bar2")
      .data(data, (d) => d.score2)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) => `translate(${barWidth + i * barWidth * 5},0)`
      )
      .attr("class", "bar2");

    const bar3 = chart
      .selectAll(".bar3")
      .data(data, (d) => d.score3)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) => `translate(${barWidth * 2 + i * barWidth * 5},0)`
      )
      .attr("class", "bar3");

    // Append a graph to each bar 'g' setting the width and height
    bar
      .append("rect")
      .attr("y", function (d) {
        return yScale(d.score1);
      })
      .attr("width", barWidth - 5)
      .attr("height", (d) => height - yScale(d.score1))
      .style("fill", "orange");

    bar2
      .append("rect")
      .attr("y", (d) => yScale(d.score2))
      .attr("width", barWidth - 5)
      .attr("height", (d) => height - yScale(d.score2))
      .style("fill", "blue");

    bar3
      .append("rect")
      .attr("y", (d) => yScale(d.score3))
      .attr("width", barWidth - 5)
      .attr("height", (d) => height - yScale(d.score3))
      .style("fill", "yellow");

    // Add text to each bar graph
    bar
      .append("text")
      .text((d) => d.score1)
      .attr("text-anchor", "middle")
      .attr("x", barWidth / 2)
      .attr("y", (d) => yScale(d.score1) - 5);

    bar2
      .append("text")
      .text((d) => d.score2)
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        (d) => `translate(${barWidth / 2},${yScale(d.score2) - 5})`
      );

    bar3
      .append("text")
      .text((d) => d.score3)
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        (d) => `translate(${barWidth / 2},${yScale(d.score3) - 5})`
      );
    const bar4 = chart
      .selectAll(".bar4")
      .data(data, (d) => d.score4)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) => `translate(${barWidth * 3 + i * barWidth * 5},0)`
      )
      .attr("class", "bar4");

    bar4
      .append("rect")
      .attr("y", (d) => yScale(d.score4))
      .attr("width", barWidth - 5)
      .attr("height", (d) => height - yScale(d.score4))
      .style("fill", "green");

    bar4
      .append("text")
      .text((d) => d.score4)
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        (d) => `translate(${barWidth / 2},${yScale(d.score4) - 5})`
      );

    // Add X axis at bottom of chart
    chart
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).tickSize(0));

    // Add y axis with label
    chart.append("g").call(d3.axisLeft(yScale));

    // Add chart title
    chart
      .append("text")
      .text("Compare percent complete subject between year school")
      .style("font-size", "20px")
      .attr(
        "transform",
        `translate(${0 - margin.left}, ${0 - margin.top / 2})`
      );

    // Add chart x axis label
    chart
      .append("text")
      .text("Compare percent complete subject between year school")
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        `translate(${width / 2}, ${height + margin.bottom / 2})`
      );

    // Add chart y axis label
    chart
      .append("text")
      .text("Points scored")
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .attr("x", 0 - height / 2)
      .attr("y", 0 - margin.left / 2);

    // Add legend
    const legend = chart
      .selectAll(".legend")
      .data(data.map((d) => d.name)) // Sử dụng tên các điểm dữ liệu để tạo legend
      .enter()
      .append("g")
      .attr("class", "legend");

    const legendSpacing = 80;
    const legendWidth = legendSpacing / 2;

    legend
      .append("text")
      .text((d) => d)
      .attr("text-anchor", "middle") // Canh giữa văn bản
      .attr("x", (d, i) => i * legendSpacing + legendWidth) // Đặt x để căn giữa theo chiều ngang
      .attr("y", height + margin.bottom + 20); // Đặt y cho vị trí trên biểu đồ

    legend
      .append("rect")
      .attr("width", legendWidth)
      .attr("height", 5)
      .style("fill", (d) => d) // Sử dụng màu sắc từ scale color
      .attr("x", (d, i) => i * legendSpacing)
      .attr("y", height + margin.bottom + 10); // Đặt vị trí cho hình chữ nhật
    const dashedLineGenerator = d3
      .line()
      .x((d) => {
        console.log(xScale(d.name) + barWidth / 2)
        if(xScale(d.name) + barWidth / 2== 682) {
          return 812
        }
        return xScale(d.name) + barWidth / 2
      } )
      .y((d) => yScale(d.score1));

    const dashedLine = chart
      .append("path")
      .datum(dashedLineData)
      .attr("class", "dashed-line")
      .attr("d", dashedLineGenerator)
      .style("stroke-dasharray", "3, 3");
  }, [data, dashedLineData]);

  return (
    <div style={{ width: "100%", display: "flex", gap: 10, marginTop: 16 }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{ width: 100, height: 30, backgroundColor: "orange" }}
            ></div>
            <div>K19</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{ width: 100, height: 30, backgroundColor: "blue" }}
            ></div>
            <div>K20</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{ width: 100, height: 30, backgroundColor: "yellow" }}
            ></div>
            <div>K21</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{ width: 100, height: 30, backgroundColor: "green" }}
            ></div>
            <div>K22</div>
          </div>
        </div>
        <svg ref={svgRef}></svg>
      </div>
      <div>
        <div>
          <Button
            style={{ margin: "12px 0" }}
            variant="contained"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Filter by year
          </Button>
        </div>
        {/* 
        <Button style={{margin: "12px 0"}} variant="contained" onClick={()=> {
          setOpen1(!open1)
        }}>Choose subject to filter</Button> */}
        <div>
          <Button
            style={{ margin: "12px 0" }}
            variant="contained"
            onClick={() => {
              props?.handleToggle();
            }}
          >
            Toggle chart
          </Button>
        </div>
      </div>

      <FilterByYear
        open={open}
        onClose={handleClose}
        onDataFiltered={setData}
        data={tData}
      />
      <FilterBySubject
        open={open1}
        onClose={handleClose1}
        onDataFiltered={setData}
      />
    </div>
  );
};

export default StatsSubject;

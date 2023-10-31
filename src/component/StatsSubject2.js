import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import FilterByYear from "./student/NewChart1210N/FilterByYear";
import { Button } from "@mui/material";
import FilterBySubject from "./student/NewChart1210N/FilterBySubject";

const StatsSubject2 = (props) => {
  const svgRef = useRef();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [data, setData] = useState([
    { name: "Year 1", score1: 22, score2: 19, score3: 18, score4: 21 },
    { name: "Year 2", score1: 37, score2: 41, score3: 42, score4: 38 },
    { name: "Year 3", score1: 72, score2: 71, score3: 65, score4: 67 },
    { name: "Year 4", score1: 100, score2: 97, score3: 95, score4: 94 },
  ]);
  const dashedLineData = [
    { name: "Year 1", score1: 20, x: 0 },
    { name: "Year 2", score1: 40 },
    { name: "Year 3", score1: 70 },
    { name: "Year 4", score1: 100, x: 880 },
  ];
  useEffect(() => {
    const margin = {
      top: 50,
      right: 50,
      bottom: 80,
      left: 70,
    };
    const width = 1000 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const xScale = d3.scaleBand().range([0, width]);
    const yScale = d3.scaleLinear().range([height, 0]);
    const barWidth = width / data.length / 5;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const chart = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    data.forEach(function (d) {
      d.score1 = parseInt(d.score1);
      d.score2 = parseInt(d.score2);
      d.score3 = parseInt(d.score3);
    });

    xScale.domain(data.map((d) => d.name));
    yScale.domain([0, 100]);

    const lineGenerator = d3
      .line()
      .x((d) => xScale(d.name) + xScale.bandwidth() / 2)
      .y((d) => yScale(d.score1));

    const line = chart
      .append("path")
      .datum(data)
      .attr("class", "line-chart")
      .attr("d", lineGenerator)
      .style("stroke", "red")
      .style("stroke-width", 2)
      .style("fill", "none");


    const line2Generator = d3
      .line()
      .x((d) => xScale(d.name) + xScale.bandwidth() / 2)
      .y((d) => yScale(d.score2));

    const line3Generator = d3
      .line()
      .x((d) => xScale(d.name) + xScale.bandwidth() / 2)
      .y((d) => yScale(d.score3));

    const line4Generator = d3
      .line()
      .x((d) => xScale(d.name) + xScale.bandwidth() / 2)
      .y((d) => yScale(d.score4));

    // Append lines to the chart
    chart
      .append("path")
      .datum(data)
      .attr("class", "line-chart")
      .attr("d", lineGenerator)
      .style("stroke", "orange")
      .style("stroke-width", 2)
      .style("fill", "none");

    chart
      .append("path")
      .datum(data)
      .attr("class", "line-chart")
      .attr("d", line2Generator)
      .style("stroke", "blue")
      .style("stroke-width", 2)
      .style("fill", "none");

    chart
      .append("path")
      .datum(data)
      .attr("class", "line-chart")
      .attr("d", line3Generator)
      .style("stroke", "yellow")
      .style("stroke-width", 2)
      .style("fill", "none");

    chart
      .append("path")
      .datum(data)
      .attr("class", "line-chart")
      .attr("d", line4Generator)
      .style("stroke", "green")
      .style("stroke-width", 2)
      .style("fill", "none");
    chart
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).tickSize(0));

    chart.append("g").call(d3.axisLeft(yScale));

    chart
      .append("text")
      .text("Compare percent complete subject between year school")
      .style("font-size", "20px")
      .attr(
        "transform",
        `translate(${0 - margin.left}, ${0 - margin.top / 2})`
      );

    chart
      .append("text")
      .text("Compare percent complete subject between year school")
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        `translate(${width / 2}, ${height + margin.bottom / 2})`
      );

    chart
      .append("text")
      .text("Points scored")
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .attr("x", 0 - height / 2)
      .attr("y", 0 - margin.left / 2);
    const dashedLineGenerator = d3
      .line()
      .x((d) => {
        console.log(xScale(d.name) + barWidth / 2);
        if (xScale(d.name) + barWidth / 2 == 682) {
          return 812;
        }
        return xScale(d.name) + barWidth / 2;
      })
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
        onClose={() => setOpen(false)}
        onDataFiltered={setData}
        data={data}
      />
      <FilterBySubject
        open={open1}
        onClose={() => setOpen1(false)}
        onDataFiltered={setData}
      />
    </div>
  );
};

export default StatsSubject2;

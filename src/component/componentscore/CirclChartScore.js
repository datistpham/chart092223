import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const RadialGauge = ({ value, min, max, title, color }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    const arc = d3
      .arc()
      .innerRadius(radius - 20)
      .outerRadius(radius)
      .startAngle(-Math.PI / 1.25)
      .endAngle(Math.PI / 1.25)
    const scale = d3
      .scaleLinear()
      .domain([min, max])
      .range([-Math.PI / 2, Math.PI / 2]);

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);
    svg
      .append("path")
      .datum({ endAngle: scale(value) })
      .attr("d", arc)
      .style("fill", "#2e89ff");

    svg
      .append("text")
      .text(value)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", "24px");

    // Đặt giá trị tối thiểu ở bên trái
    svg
      .append("text")
      .text(min)
      .attr("text-anchor", "start")
      .attr("x", -radius)
      .attr("dy", radius / 1.25)
      .style("font-size", "14px");

    // Đặt giá trị tối đa ở bên phải
    svg
      .append("text")
      .text(max)
      .attr("text-anchor", "end")
      .attr("x", radius)
      .attr("dy", radius / 1.25)
      .style("font-size", "14px");

    // Đặt tiêu đề ở giữa phía dưới
    svg
      .append("text")
      .text(title)
      .attr("text-anchor", "middle")
      .attr("dy", "100px") // Điều chỉnh vị trí dọc
      .style("font-size", "16px");
  }, [value, min, max, title, color]);

  return <svg ref={svgRef}></svg>;
};

export default RadialGauge;

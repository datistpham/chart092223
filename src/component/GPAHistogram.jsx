import React, { useContext, useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { AppContext } from "../App";

const GpaHistogram = () => {
  const [data, setData] = useState([]);
  const svgRef = useRef();
  const { data2 } = useContext(AppContext);

  useEffect(() => {
    // Tạo một đối tượng để lưu trữ tổng điểm và số lượng môn học cho mỗi enrollment
    const enrollmentScores = {};

    // Tính tổng điểm và số lượng môn học cho mỗi enrollment
    data2.forEach((item) => {
      if (item.score !== undefined) {
        if (!enrollmentScores[item.enrollment]) {
          enrollmentScores[item.enrollment] = { totalScore: 0, count: 0 };
        }

        enrollmentScores[item.enrollment].totalScore += item.score;
        enrollmentScores[item.enrollment].count += 1;
      }
    });

    // Tạo mảng mới chỉ chứa thông tin của từng enrollment mà không lặp lại
    const uniqueEnrollments = Object.keys(enrollmentScores).map(
      (enrollment) => {
        const enrollmentData = enrollmentScores[enrollment];
        const averageScore = enrollmentData.totalScore / enrollmentData.count;
        // Chuyển điểm trung bình về thang điểm 4 (điểm trung bình / 25)
        const averageScoreOn4Scale = averageScore / 25;
        // Làm tròn số điểm trung bình trên thang điểm 4 nếu cần
        const roundedAverageScoreOn4Scale =
          Math.round(averageScoreOn4Scale * 100) / 100;

        return {
          enrollment: enrollment,
          averageScore: averageScore,
          averageScoreOn4Scale: roundedAverageScoreOn4Scale,
        };
      }
    );
    setData(
      uniqueEnrollments.map((item) => ({
        key: `k${item.enrollment}`,
        value: item.averageScoreOn4Scale,
      }))
    );
  }, [data2]);
  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 60, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.key))
      .range([0, width])
      .padding(0.1);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));
    svg.append("g").call(d3.axisLeft(y));
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + margin.top + 20)
      .text("GPA"); // X-axis label
    // Y-axis label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -margin.left + 20)
      .text("Points"); // Y-axis label
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.key))
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.value))
      .attr("fill", "#69b3a2"); // Bar color

    // Adding data labels on top of bars
    svg
      .selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => x(d.key) + x.bandwidth() / 2)
      .attr("y", (d) => y(d.value) - 10)
      .attr("text-anchor", "middle")
      .text((d) => d.value.toFixed(1)); // Display GPA values on top of bars
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default GpaHistogram;

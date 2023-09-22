import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ScatterChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Kích thước biểu đồ
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Tạo dữ liệu cho trục x và y
    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .nice()
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .nice()
      .range([height, 0]);

    // Tạo dữ liệu điểm
    svg.selectAll('.dot')
      .data(data)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.x))
      .attr('cy', d => y(d.y))
      .attr('r', 3)
      .style('fill', 'steelblue');

    // Tạo trục x và y
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));

  }, [data]);

  return (
    <div className="chart-container">
      <h2>Biểu đồ phân tán</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default ScatterChart;

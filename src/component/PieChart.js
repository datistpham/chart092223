import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.value);

    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const arcs = pie(data);

    const arcGroup = svg.selectAll('.arc')
      .data(arcs)
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcGroup.append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label));

    const legend = svg.selectAll('.legend')
      .data(data.map(d => d.label))
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => `translate(${radius + 10},${(i - (data.length / 2)) * 20})`); // Đặt chú thích bên phải

    legend.append('rect')
      .attr('width', 12)
      .attr('height', 12)
      .attr('fill', color);

    legend.append('text')
      .attr('x', 15)
      .attr('y', 10)
      .text(d => d);

  }, [data]);

  return (
    <div className="chart-container">
      <h2>Biểu đồ tròn</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default PieChart;

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ComparePieChart = ({ student1, student2 }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Dữ liệu mẫu, bạn cần thay thế bằng dữ liệu thực tế của hai học sinh
    const data = [
      { label: student1.name, value: student1.daysAbsent },
      { label: student2.name, value: student2.daysAbsent },
    ];

    const width = 400;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal().range(['blue', 'red']);

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie().value(d => d.value);

    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const arcs = g.selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label));
    

  }, [student1, student2]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default ComparePieChart;

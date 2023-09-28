import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChartCompare = ({ student1, student2 }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Dữ liệu mẫu, bạn cần thay thế bằng dữ liệu thực tế của hai học sinh
    const data = [
      { subject: 'Math', student1Score: student1.mathScore, student2Score: student2.mathScore },
      { subject: 'Physics', student1Score: student1.physicsScore, student2Score: student2.physicsScore },
      { subject: 'Chemistry', student1Score: student1.chemistryScore, student2Score: student2.chemistryScore },
    ];

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 500;
    const height = 400;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.subject))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.student1Score, d.student2Score))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.selectAll('.bar1')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar1')
      .attr('x', d => xScale(d.subject))
      .attr('y', d => yScale(d.student1Score))
      .attr('width', xScale.bandwidth() / 2)
      .attr('height', d => height - margin.bottom - yScale(d.student1Score))
      .attr('fill', 'blue');

    svg.selectAll('.bar2')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar2')
      .attr('x', d => xScale(d.subject) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.student2Score))
      .attr('width', xScale.bandwidth() / 2)
      .attr('height', d => height - margin.bottom - yScale(d.student2Score))
      .attr('fill', 'red');

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));
  }, [student1, student2]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default BarChartCompare;

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const HorizontalBarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([0, width]);

    const y = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, height])
      .padding(0.1);

    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', d => y(d.label))
      .attr('width', d => x(d.value))
      .attr('height', y.bandwidth())
      .attr('fill', 'orange') // Đặt màu cố định ở đây


    svg.selectAll('.label')
      .data(data)
      .enter().append('text')
      .attr('class', 'label')
      .attr('x', d => x(d.value) + 5)
      .attr('y', d => y(d.label) + y.bandwidth() / 2)
      .attr('dy', '0.35em')
      .text(d => d.value);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5));

    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default HorizontalBarChart;

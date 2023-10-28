import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const data = [
  { subject: 'Subject 1', completed: 80, planned: 90 },
  { subject: 'Subject 2', completed: 60, planned: 83 },
  { subject: 'Subject 3', completed: 40, planned: 70 },
  { subject: 'Subject 4', completed: 90, planned: 95 },
  { subject: 'Subject 5', completed: 75, planned: 80 },
];

const Chart3 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(data.map(d => d.subject))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, 100])
      .nice()
      .range([height, 0]);

    const completedArea = d3
      .area()
      .x(d => xScale(d.subject) + xScale.bandwidth() / 2)
      .y0(height)
      .y1(d => yScale(d.completed))
      .curve(d3.curveMonotoneX);

    const plannedArea = d3
      .area()
      .x(d => xScale(d.subject) + xScale.bandwidth() / 2)
      .y0(height)
      .y1(d => yScale(d.planned))
      .curve(d3.curveMonotoneX);

    svg
      .append('path')
      .datum(data)
      .attr('class', 'completed-area')
      .attr('d', completedArea)
      .attr('fill', '#4CAF50')
      .attr('opacity', 0.3);

    svg
      .append('path')
      .datum(data)
      .attr('class', 'planned-area')
      .attr('d', plannedArea)
      .attr('fill', '#FFC107')
      .attr('opacity', 0.3);

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(yScale).ticks(5));
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Chart3;

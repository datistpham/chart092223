import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const Chart = () => {
  const svgRef = useRef();
  const [data, setData] = useState([
    { year: 'Năm 1', K19: 10, K20: 10 },
    { year: 'Năm 2', K19: 30, K20: 30 },
    { year: 'Năm 3', K19: 50, K20: 50 },
    { year: 'Năm 4', K19: 50, K20: 70 },
  ]);

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);

    svg.selectAll('*').remove();

    const chart = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map(d => d.year))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, 100])
      .nice()
      .range([height, 0]);

    // Tạo nhóm cột cho K19
    const groupK19 = chart.append('g').attr('class', 'group-k19');

    // Tạo nhóm cột cho K20
    const groupK20 = chart.append('g').attr('class', 'group-k20');

    groupK19
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.year))
      .attr('y', d => y(d.K19))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.K19))
      .attr('fill', 'steelblue');

    groupK20
      .selectAll('.bar2')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar2')
      .attr('x', d => x(d.year))
      .attr('y', d => y(d.K20))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.K20))
      .attr('fill', 'orange');
  }, [data]);

  const changeData = () => {
    const newData = [
      { year: 'Năm 1', K19: 20, K20: 15 },
      { year: 'Năm 2', K19: 40, K20: 35 },
      { year: 'Năm 3', K19: 60, K20: 55 },
      { year: 'Năm 4', K19: 70, K20: 80 },
    ];
    setData(newData);
  };

  return (
    <div>
      <button onClick={changeData}>Thay đổi dữ liệu</button>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Chart;

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    // 1. Set canvas margins
    const margin = {
      top: 50,
      right: 50,
      bottom: 80,
      left: 70
    };
    const width = 1000 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom ;

    // const color = d3.scaleOrdinal(d3.col);

    // 2. Set x and y scales
    const xScale = d3.scaleBand().range([0, width]);
    const yScale = d3.scaleLinear().range([height, 0]);

    // 3. Create svg object
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Mẫu dữ liệu
    let data = [
      { name: 'Math', score1: 100, score2: 80, score3: 70 },
      { name: 'Physic', score1: 50, score2: 60, score3: 70 },
      { name: 'Science', score1: 120, score2: 130, score3: 140 },
      { name: 'Art', score1: 150, score2: 140, score3: 100 }
    ];

    // parseInt data
    data.forEach(function(d) {
      d.score1 = parseInt(d.score1);
      d.score2 = parseInt(d.score2);
      d.score3 = parseInt(d.score3);  
    });

    // Use JS to sort array by score
    data = data.sort(function(a, b) {
      return a.score1 - b.score1
    });
    const color= ["orange", "yellow", "orange", "yellow"]
    // Scale axis based on data
    xScale.domain(data.map(d => d.name));
    yScale.domain([0, 200]);

    // Create new bar groups appending data and setting starting y index position
    const barWidth = (width / data.length) / 3;

    const bar = svg.selectAll('.bar1')
      .data(data, d => d.score1)
      .enter().append('g')
      .attr('transform', (d, i) => `translate(${(i * 3) * barWidth + 5}, 0)`)
      .attr('class', 'bar1')

    const bar2 = svg.selectAll('.bar2')
      .data(data, d => d.score2)
      .enter().append('g')
      .attr('transform', (d, i) => `translate(${barWidth + (i * barWidth * 3) + 1},0)`)
      .attr('class', 'bar2');

    const bar3 = svg.selectAll('.bar3')
      .data(data, d => d.score3)
      .enter().append('g')
      .attr('transform', (d, i) => `translate(${(barWidth * 2) + (i * barWidth * 3) - 3},0)`)
      .attr('class', 'bar3');

    // Append a graph to each bar 'g' setting the width and height
    bar.append('rect')
      .attr('y', function(d) {
        return yScale(d.score1)
      })
      .attr('width', barWidth - 5)
      .attr('height', d => height - yScale(d.score1))
      .style('fill', "orange");

    bar2.append('rect')
      .attr('y', d => yScale(d.score2))
      .attr('width', barWidth - 5)
      .attr('height', d => height - yScale(d.score2))
      .style('fill', "blue");

    bar3.append('rect')
      .attr('y', d => yScale(d.score3))
      .attr('width', barWidth - 5)
      .attr('height', d => height - yScale(d.score3))
      .style('fill', "yellow");

    // Add text to each bar graph
    bar.append('text')
      .text(d => d.score1)
      .attr('text-anchor', 'middle')
      .attr('x', barWidth / 2)
      .attr('y', d => yScale(d.score1) - 5);

    bar2.append('text')
      .text(d => d.score2)
      .attr('text-anchor', 'middle')
      .attr('transform', d => `translate(${barWidth/2},${yScale(d.score2) -5})`)

    bar3.append('text')
      .text(d => d.score3)
      .attr('text-anchor', 'middle')
      .attr('transform', d => `translate(${barWidth/2},${yScale(d.score3) -5})`)

    // Add X axis at bottom of chart
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).tickSize(0));

    // Add y axis with label
    svg.append('g')
      .call(d3.axisLeft(yScale));

    // Add chart title
    svg.append('text')
      .text('Examination Results by Branch')
      .style('font-size', '20px')
      .attr('transform', `translate(${0 - margin.left}, ${0 - (margin.top/2)})`);

    // Add chart x axis label
    svg.append('text')
      .text('Examination Results by Branch')
      .attr('text-anchor', 'middle')
      .attr('transform', `translate(${width/2}, ${height + (margin.bottom / 2)})`);

    // Add chart y axis label 
    svg.append('text')
      .text('Points scored')
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .attr('x', 0 - (height / 2))
      .attr('y', 0 - (margin.left / 2))

    // Add legend
    const legend = svg.selectAll('.legend')
    .data(data.map(d => d.name)) // Sử dụng tên các điểm dữ liệu để tạo legend
    .enter()
    .append('g')
    .attr('class', 'legend');
  
  const legendSpacing = 80;
  const legendWidth = legendSpacing / 2;
  
  legend.append('text')
    .text(d => d)
    .attr('text-anchor', 'middle') // Canh giữa văn bản
    .attr('x', (d, i) => i * legendSpacing + legendWidth) // Đặt x để căn giữa theo chiều ngang
    .attr('y', height + margin.bottom + 20); // Đặt y cho vị trí trên biểu đồ
  
  legend.append('rect')
    .attr('width', legendWidth)
    .attr('height', 5)
    .style('fill', d => d) // Sử dụng màu sắc từ scale color
    .attr('x', (d, i) => i * legendSpacing)
    .attr('y', height + margin.bottom + 10); // Đặt vị trí cho hình chữ nhật
  
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;

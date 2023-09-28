import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DonutChart = () => {
  const svgRef = useRef();
  const data = [
    { label: 'grade1', value: 30 },
    { label: 'grade2', value: 20 },
    { label: 'grade3', value: 15 },
    { label: 'grade4', value: 25 },
    { label: 'grade5', value: 10 },
  ];
  useEffect(() => {
    // Kích thước biểu đồ
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    // Màu sắc cho các phần tử
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557']);

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie()
      .value(d => d.value);

    const dataReady = pie(data);

    const arc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius);
    svg.selectAll('path')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label))
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .on('mouseover', function (event, d) {
        const percent = ((d.data.value / d3.sum(data, d => d.value)) * 100).toFixed(2);
      })
    // Thêm phần chú thích màu ở góc phải
    const legend = svg.append('g')
      .attr('transform', `translate(${width - 100}, -${height / 2})`);

    data.forEach((d, i) => {
      const legendItem = legend.append('g')
        .attr('transform', `translate(0, ${i * 20})`);

      legendItem.append('rect')
        .attr('width', 18)
        .attr('height', 18)
        .attr('fill', color(d.label));

      legendItem.append('text')
        .attr('x', 25)
        .attr('y', 9)
        .attr('dy', '.35em')
        .style('text-anchor', 'start')
        .text(`${d.label}`);
    });
    // Handmade legend
svg.append("circle").attr("cx",200).attr("cy",130).attr("r", 6).style("fill", "#69b3a2")
svg.append("circle").attr("cx",200).attr("cy",160).attr("r", 6).style("fill", "#404080")
svg.append("text").attr("x", 220).attr("y", 130).text("variable A").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 220).attr("y", 160).text("variable B").style("font-size", "15px").attr("alignment-baseline","middle")

  }, [data]);

  return (
    <div id="donut-chart">
        <svg ref={svgRef}></svg>
    </div>
  );
};

export default DonutChart
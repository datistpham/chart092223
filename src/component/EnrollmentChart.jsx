import React, { useContext, useEffect, useRef } from "react";
import { BarChart } from "react-d3-components";
import { AppContext } from "../App";
import * as d3 from "d3";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const EnrollmentChart = () => {
  const { data2 } = useContext(AppContext);
  const chartRef = useRef(null);

  // Tạo một Map để lưu trữ các giá trị enrollment và đếm số lượng
  let enrollmentCount = new Map();
  const colorArray = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#aec7e8",
    "#ffbb78",
    "#98df8a",
    "#ff9896",
  ];
  const colorScale = d3.scaleLinear().range(colorArray);

  // Bạn có thể sử dụng colorScale để ánh xạ màu cho từng cột trong biểu đồ

  const tooltipHtml = (x, y, z) => {
    console.log(z);
    return (
      <div>
        <strong>Enrollment:</strong> {z}
      </div>
    );
  };

  // Lọc các phần tử có enrollment khác nhau và thêm vào Map
  data2.forEach((item) => {
    const { enrollment } = item;
    if (enrollmentCount.has(enrollment)) {
      enrollmentCount.set(enrollment, {
        ...item,
        count: enrollmentCount.get(enrollment).count + 1,
      });
    } else {
      enrollmentCount.set(enrollment, { ...item, count: 1 });
    }
  });

  // Lấy các giá trị từ Map để tạo mảng mới
  let uniqueArrayWithCount = Array.from(enrollmentCount.values());
  uniqueArrayWithCount.sort((a, b) => a.enrollment - b.enrollment);
  console.log("uniqueArrayWithCount", uniqueArrayWithCount);

  const labels = uniqueArrayWithCount?.map((item) => [`K${item.enrollment}`]);
  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF33C5",
    "#33B0FF",
    "#FFC533",
    "#3373FF",
    "#FF3368",
    "#33FFAB",
    "#A833FF",
    "#FF3333",
    "#33FFD1",
    "#FF8533",
    "#333BFF",
    "#FF33A6",
    "#33FF33",
  ];
  const data = uniqueArrayWithCount?.map((item) => [item.score]);
  useEffect(() => {
    // data and labels to plot

    // maximum width of single bar so bar doesn't look like a box
    const max_bar_width = 100;

    // maximum height of the svg element
    // this will include top and bottom offset
    const svg_height = 600;

    // top and bottom margins
    const top_offset = 50;
    const bottom_offset = 50;

    // append svg
    if (chartRef.current) {
      const svg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("fill", "red")
        .attr("width", "100%")
        .attr("height", svg_height);
      // svg.selectAll("*").remove();
      // to make graph responsive calculate we set width 100%
      // here we calculate width in pixels
      const svg_width = svg.node().getBoundingClientRect().width;

      // decide bar width depending upon available space and no. of bars to plot
      let bar_width = Math.round((svg_width - 60) / data.length);
      if (bar_width > max_bar_width) {
        bar_width = max_bar_width;
      }

      // spacing between two bars
      // instead of having a fixed value we set it dynamically
      const spacing = 0.15 * bar_width;

      // to center align graph we move it from left to right
      // this is applicable if there's any space left
      let left_offset = Math.round((svg_width - bar_width * data.length) / 2);
      if (left_offset < 0) {
        left_offset = 0;
      }

      // create scale
      const scale = d3
        .scaleLinear()
        .domain([0, Math.max(...data)])
        .range([0, svg_height - top_offset - bottom_offset]);

      // create scale for Y-Axis
      // we could have used scale above but for Y-Axis we need domain reversed
      const scale_y_axis = d3
        .scaleLinear()
        .domain([Math.max(...data), 0])
        .range([0, svg_height - top_offset - bottom_offset]);

      // create tooltip element
      const tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "d3-tooltip")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("padding", "15px")
        .style("background", "rgba(0,0,0,0.6)")
        .style("border-radius", "5px")
        .style("color", "#fff")
        .text("a simple tooltip");

      // append rect
      const rect = svg
        .selectAll("g")
        .data(data)
        .enter()
        .append("rect")
        .attr("fill", (d, i) => colors[i]) // Màu sắc thay đổi dựa trên index hoặc giá trị của dữ liệu
        .attr("x", (d, i) => left_offset + bar_width * i)
        .attr("y", (d) => svg_height - bottom_offset)
        .attr("width", bar_width - spacing)
        .on("mouseover", function (d, i) {
          console.log("d", d, "i", i);
          tooltip.html(`Student: ${i}`).style("visibility", "visible");
        })
        .on("mousemove", function (event) {
          tooltip
            .style("top", event.pageY - 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          tooltip.html("").style("visibility", "hidden");
        });

      // append text
      svg
        .selectAll("g")
        .data(data)
        .enter()
        .append("text")
        .attr("dominant-baseline", "text-before-edge")
        .attr("text-anchor", "middle")
        .attr("fill", "#000000")
        .attr(
          "x",
          (d, i) => left_offset + bar_width * i + bar_width / 2 - spacing / 2
        )
        .attr("y", svg_height - bottom_offset + 5)
        .attr("style", "font-family:Verdana")
        .text((d, i) => labels[i]);

      // append X-Axis
      svg
        .append("line")
        .attr("stroke", "#000000")
        .attr("stroke-width", 2)
        .attr("x1", left_offset)
        .attr("y1", svg_height - bottom_offset)
        .attr("x2", bar_width * data.length + left_offset - spacing)
        .attr("y2", svg_height - bottom_offset);

      // append Y-Axis
      svg
        .append("g")
        .attr("transform", "translate(0," + top_offset + ")")
        .call(d3.axisRight(scale_y_axis));

      // set animation
      rect
        .transition()
        .ease(d3.easeLinear)
        .duration(1000)
        .attr("y", (d) => svg_height - bottom_offset - scale(d))
        .attr("height", (d) => scale(d));
    }
  }, [colors, labels, data]);
  
  if (uniqueArrayWithCount) {
    return (
      <>
        {/* <BarChart
          data={[
            {
              label: "Enrollment",
              values: uniqueArrayWithCount?.map((item) => ({
                x: `k${item.enrollment}`,
                y: item.count,
                color: "#2e89ff", // Thêm màu vào dữ liệu
              })),
            },
          ]}
          width={1000}
          height={400}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          tooltipHtml={tooltipHtml}
          colorScale={scaleOrdinal([
            "#1f77b4",
            "#ff7f0e",
            "#2ca02c",
            "#d62728",
            "#9467bd",
            "#8c564b",
            "#e377c2",
            "#7f7f7f",
            "#bcbd22",
            "#17becf",
            "#aec7e8",
            "#ffbb78",
            "#98df8a",
            "#ff9896",
            "#c5b0d5",
            "#c49c94",
          ])}
        /> */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="aksljkdjfksaea" style={{ width: 600 }} ref={chartRef}></div>
          <div>
            {
              colors?.map((item, key)=> <div style={{textAlign: "left", display: "flex", alignItems: "center", gap: 10}} key={key}>
                <div style={{width: 40, height: 20, backgroundColor: item}}></div>
                {labels[key]}
              </div>)
            }
          </div>
        </div> 
      </>
    );
  }
};

export default EnrollmentChart;

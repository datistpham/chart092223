import React, { useContext } from "react";
import { BarChart } from "react-d3-components";
import { AppContext } from "../App";
import * as d3 from "d3";

const EnrollmentChart = () => {
  const { data2 } = useContext(AppContext);

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
    "#c5b0d5",
    "#c49c94",
  ];
  const colorScale = d3.scaleOrdinal().range(colorArray);

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

  if (uniqueArrayWithCount) {
    return (
      <BarChart
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
        colorScale={colorScale}
      />
    );
  }
};

export default EnrollmentChart;

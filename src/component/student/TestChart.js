import React, { useEffect, useState } from "react";
import * as d3 from "d3";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import { LineChart, BarChart } from "react-d3-components";
import { Button } from "@mui/material";
import FilterPopup from "./FilterPopup";
import FilterPopup2 from "./FilterPopup2";
import FilterPopup3 from "./FilterPopup3";
import FilterPopup4 from "./FilterPopup4";

// set the dimensions and margins of the graph
const margin = { top: 100, right: 20, bottom: 50, left: 190 };
// const width = 450 - margin.left - margin.right;
// const height = 350 - margin.top - margin.bottom;

const TestChart = () => {
  const [xScale, setXScale] = useState(null);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4]= useState(false)
  const [representK, setRepresentK]= useState([])
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleOpen4= ()=> {
    setOpen4(true)
  }
  const handleClose4= ()=> {
    setOpen4(false)
  }
  const tData = [
    {
      label: "K19",
      color: "#ff0",
      values: [
        { x: "K19", y: 58 , subject: "Art"},
        { x: "K20", y: 49 , subject: "Science"},
        { x: "K21", y: 64, subject: "Bio" },
        { x: "K22", y: 57, subject: "Math"  },
        { x: "K23", y: 70 , subject: "Informatic"},
      ],
    },
    {
      label: "K20",
      values: [
        { x: "K19", y: 68, subject: "Art" },
        { x: "K20", y: 60, subject: "Science"  },
        { x: "K21", y: 57, subject: "Bio" },
        { x: "K22", y: 42, subject: "Math" },
        { x: "K23", y: 75, subject: "Informatic" },
      ],
    },

    {
      label: "K21",
      values: [
        { x: "K19", y: 62, subject: "Art" },
        { x: "K20", y: 57, subject: "Science"  },
        { x: "K21", y: 70, subject: "Bio" },
        { x: "K22", y: 52, subject: "Math" },
        { x: "K23", y: 62, subject: "Informatic" },
      ],
    },
    {
      label: "K22",
      values: [
        { x: "K19", y: 72, subject: "Art" },
        { x: "K20", y: 67, subject: "Science" },
        { x: "K21", y: 60, subject: "Bio" },
        { x: "K22", y: 55 , subject: "Math"},
        { x: "K23", y: 65 , subject: "Informatic"},
      ],
    },
  ];
  // const [check, setCheck] = useState(false);

  const [data, setData] = useState([
    {
      label: "K19",
      color: "#ff0",
      values: [
        { x: "K19", y: 58, subject: "Art" },
        { x: "K20", y: 49, subject: "Science" },
        { x: "K21", y: 64, subject: "Bio" },
        { x: "K22", y: 57, subject: "Math" },
        { x: "K23", y: 70, subject: "Informatic" },
      ],
    },
    {
      label: "K20",
      values: [
        { x: "K19", y: 68, subject: "Art" },
        { x: "K20", y: 60, subject: "Science" },
        { x: "K21", y: 57, subject: "Bio" },
        { x: "K22", y: 42, subject: "Math" },
        { x: "K23", y: 75, subject: "Informatic" },
      ],
    },
    {
      label: "K21",
      values: [
        { x: "K19", y: 62, subject: "Art" },
        { x: "K20", y: 57 , subject: "Art"},
        { x: "K21", y: 70 , subject: "Bio"},
        { x: "K22", y: 52, subject: "Math" },
        { x: "K23", y: 62, subject: "Informatic" },
      ],
    },
    {
      label: "K22",
      values: [
        { x: "K19", y: 72, subject: "Art" },
        { x: "K20", y: 67,  subject: "Science" },
        { x: "K21", y: 60, subject: "Bio" },
        { x: "K22", y: 55, subject: "Math" },
        { x: "K23", y: 65 , subject: "Informatic" },
      ],
    },
  ]);
  var tooltip = function (x, y0, y, total) {
    // return x + " " + y.toString();
  };
  const getTooltipText = (x, y) => {
    return `X: ${x}, Y: ${y}`;
  };

  useEffect(() => {
    // Khởi tạo xScale khi dữ liệu thay đổi hoặc lần đầu tiên render component
    if (data.length > 0) {
      const xScale = d3
        .scaleBand()
        .domain(data[0].values.map((d) => d.x)) // Lấy giá trị x từ dữ liệu
        .range([0, 800]) // Phạm vi của trục x trên biểu đồ
        .padding(0.1); // Khoảng cách giữa các cột, giá trị từ 0 đến 1, 0.1 là một giá trị phổ biến

      setXScale(xScale);
    }
  }, [data]);

  useEffect(()=> {
    setRepresentK(data?.map(item=> item.label))
  }, [data])

  const renderK= (data)=> {

    return data?.map((item, key)=> <div key={key}>
      item
    </div>)
  }

  const colorK= (k)=> {
    if(k=== "K19") {
      return "#f00"
    }
    if(k=== "K20") {
      
    }
    if(k=== "K21") {
      
    }
    if(k=== "K22") {
      
    }
  }

  return (
    <div
      className="test_chart"
      style={{ display: "flex", justifyContent: "center", gap: 10 }}
    >
      <LineChart
        data={data}
        width={800}
        height={450}
        xScale={xScale} // Truyền xScale vào LineChart
        margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
        onMouseEnter={(datum) => console.log(datum)}
        onMouseOutCallback={(datum) => console.log(datum)}
        legend={true}
        xTooltipFormat={(x) => `Category: ${x}`} // Định dạng cho x-axis tooltip
        yTooltipFormat={(y) => `Value: ${y}`} // Định dạng cho y-axis tooltip
        xAxis={{ label: 'Batch'}}
        yAxis={{ label: '%' , domain: [0, 100]}}
      
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: 12 }}>
          <Button variant={"contained"} onClick={handleOpen}>
            Choose school year
          </Button>
        </div>
        <div
          style={{
            marginBottom: 12,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Button variant={"contained"} onClick={handleOpen2}>
            Choose subject
          </Button>
        </div>
        <div
          style={{
            marginBottom: 12,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Button variant={"contained"} onClick={handleOpen3}>
            Choose term
          </Button>
        </div>
        {/*  */}
        <div
          style={{
            marginBottom: 12,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Button variant={"contained"} onClick={handleOpen4}>
            Choose year
          </Button>
        </div>
      </div>
      <FilterPopup
        open={open}
        onClose={handleClose}
        onDataFiltered={setData}
        data={tData}
      />
      <FilterPopup2
        open={open2}
        onClose={handleClose2}
        onDataFiltered={setData}
        data={tData}
      />
      <FilterPopup3
        open={open3}
        onClose={handleClose3}
        onDataFiltered={setData}
        data={tData}
      />
      <FilterPopup4 open={open4} onClose={handleClose4} onDataFiltered={setData} data={tData} />

    </div>
  );
};

export default TestChart;

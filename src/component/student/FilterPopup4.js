import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material";

const t1 = [
  {
    label: "K19",
    color: "#ff0",
    values: [
      { x: "Art", y: 58 },
      { x: "Math", y: 49 },
      { x: "Science", y: 64 },
      { x: "Bio", y: 57 },
      { x: "Informatic", y: 70 },
    ],
  },
  {
    label: "K20",
    values: [
      { x: "Art", y: 68 },
      { x: "Math", y: 60 },
      { x: "Science", y: 57 },
      { x: "Bio", y: 42 },
      { x: "Informatic", y: 75 },
    ],
  },
  {
    label: "K21",
    values: [
      { x: "Art", y: 62 },
      { x: "Math", y: 57 },
      { x: "Science", y: 70 },
      { x: "Bio", y: 52 },
      { x: "Informatic", y: 62 },
    ],
  },
  {
    label: "K22",
    values: [
      { x: "Art", y: 72 },
      { x: "Math", y: 67 },
      { x: "Science", y: 60 },
      { x: "Bio", y: 55 },
      { x: "Informatic", y: 65 },
    ],
  },
];

const t2 = [
  {
    label: "K19",
    color: "#ff0",
    values: [
      { x: "Art", y: 40 },
      { x: "Math", y: 59 },
      { x: "Science", y: 55 },
      { x: "Bio", y: 67 },
      { x: "Informatic", y: 80 },
    ],
  },
  {
    label: "K20",
    values: [
      { x: "Art", y: 58 },
      { x: "Math", y: 66 },
      { x: "Science", y: 67 },
      { x: "Bio", y: 50 },
      { x: "Informatic", y: 69 },
    ],
  },
  {
    label: "K21",
    values: [
      { x: "Art", y: 70 },
      { x: "Math", y: 47 },
      { x: "Science", y: 60 },
      { x: "Bio", y: 45 },
      { x: "Informatic", y: 52 },
    ],
  },
  {
    label: "K22",
    values: [
      { x: "Art", y: 75 },
      { x: "Math", y: 68 },
      { x: "Science", y: 63 },
      { x: "Bio", y: 56 },
      { x: "Informatic", y: 62 },
    ],
  },
];

const t3 = [
  {
    label: "K19",
    color: "#ff0",
    values: [
      { x: "Art", y: 47 },
      { x: "Math", y: 50 },
      { x: "Science", y: 70 },
      { x: "Bio", y: 60 },
      { x: "Informatic", y: 55 },
    ],
  },
  {
    label: "K20",
    values: [
      { x: "Art", y: 55 },
      { x: "Math", y: 48 },
      { x: "Science", y: 59 },
      { x: "Bio", y: 60 },
      { x: "Informatic", y: 70 },
    ],
  },
  {
    label: "K21",
    values: [
      { x: "Art", y: 52 },
      { x: "Math", y: 67 },
      { x: "Science", y: 78 },
      { x: "Bio", y: 62 },
      { x: "Informatic", y: 82 },
    ],
    
  },
  {
    label: "K22",
    values: [
      { x: "Art", y: 85 },
      { x: "Math", y: 88 },
      { x: "Science", y: 93 },
      { x: "Bio", y: 86 },
      { x: "Informatic", y: 82 },
    ],
  },
];

const FilterPopup4 = ({ open, onClose, onDataFiltered }) => {
  const [selectedValue, setSelectedValue] = useState("2019");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const applyFilters = () => {
    if (selectedValue === "2019") {
      onDataFiltered(t1);
    }
    if (selectedValue === "2020") {
      onDataFiltered(t2);
    }
    if (selectedValue === "2021") {
      onDataFiltered(t3);
    }

    onClose();
  };

  const uniqueXValues = ["2019", "2020", "2021"];

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Choose term</DialogTitle>
      <DialogContent>
        <div style={{ width: "100%", padding: 10 }}>
          <Select
            value={selectedValue}
            onChange={handleChange}
            label="Choose Term"
            fullWidth
          >
            <MenuItem value="">Choose year</MenuItem>
            {uniqueXValues.map((xValue) => (
              <MenuItem key={xValue} value={xValue}>
                {xValue}
              </MenuItem>
            ))}
          </Select>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={applyFilters} variant="contained" color="primary">
          Apply
        </Button>
        <Button onClick={onClose} variant="contained" color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterPopup4;

import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material";

const t1 = [
    { name: "Year 1", score1: 75, score2: 88, score3: 92 },
    { name: "Year 2", score1: 62, score2: 70, score3: 78 },
    { name: "Year 3", score1: 80, score2: 92, score3: 89 },
    { name: "Year 4", score1: 55, score2: 68, score3: 75 },
  ]
  

const t2 = [
    { name: "Year 1", score1: 72, score2: 85, score3: 78 },
    { name: "Year 2", score1: 65, score2: 78, score3: 70 },
    { name: "Year 3", score1: 80, score2: 92, score3: 88 },
    { name: "Year 4", score1: 56, score2: 68, score3: 74 },
  ]

const t3 = [
    { name: "Year 1", score1: 78, score2: 88, score3: 92 },
    { name: "Year 2", score1: 85, score2: 76, score3: 89 },
    { name: "Year 3", score1: 92, score2: 84, score3: 95 },
    { name: "Year 4", score1: 68, score2: 72, score3: 80 },
  ]

const FilterBySubject = ({ open, onClose, onDataFiltered }) => {
  const [selectedValue, setSelectedValue] = useState("Choose subject");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const applyFilters = () => {
    if (selectedValue === "Art") {
      onDataFiltered(t1);
    }
    if (selectedValue === "Science") {
      onDataFiltered(t2);
    }
    if (selectedValue === "Math") {
      onDataFiltered(t3);
    }

    onClose();
  };

  const uniqueXValues = ["Art", "Science", "Math"];

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Choose subject</DialogTitle>
      <DialogContent>
        <div style={{ width: "100%", padding: 10 }}>
          <Select
            value={selectedValue}
            onChange={handleChange}
            label="Choose Subject"
            fullWidth
          >
            <MenuItem value="">Choose subject</MenuItem>
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

export default FilterBySubject;

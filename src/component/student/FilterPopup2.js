import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const FilterPopup2 = ({ open, onClose, onDataFiltered, data }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
//   const [filterData, setFilterData] = useState([]);

  const handleCheckboxChange = (filter) => {
    if (selectedFilters.find((item) => item.x == filter)) {
      console.log(12);
      setSelectedFilters(selectedFilters.filter((item) => item.x !== filter));
    } else {
      setSelectedFilters([...selectedFilters, { x: filter }]);
    }
  };

  const applyFilters = () => {
    const filteredData = data.map((item) => {
      const filteredValues = item.values.filter((value) => {
        return selectedFilters.some((filterValue) => filterValue.x === value.x);
      });
      return { ...item, values: filteredValues };
    });

    onDataFiltered(filteredData);
    onClose();
  };

  useEffect(() => {
    setSelectedFilters(data?.[0]?.values);
  }, [data]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <div style={{marginBottom: 12}}>
            <strong>Choose subject to display:</strong>
        </div>
        {data.length > 0 &&
          data[0].values.map((value) => (
            <FormControlLabel
              key={value.x}
              control={
                <Checkbox
                  checked={selectedFilters.find((item) => item.x == value.x)}
                  onChange={() => handleCheckboxChange(value.x)}
                />
              }
              label={value.x}
            />
          ))}
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

export default FilterPopup2;

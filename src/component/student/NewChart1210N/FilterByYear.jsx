import { Button, Checkbox, Dialog, DialogActions, DialogContent, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";

const FilterByYear = ({ open, onClose, onDataFiltered, data }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);
  
    const handleCheckboxChange = (filter) => {
      if (selectedFilters.includes(filter)) {
        setSelectedFilters(selectedFilters.filter((item) => item !== filter));
      } else {
        setSelectedFilters([...selectedFilters, filter]);
      }
    };
    
    const applyFilters = () => {
      const filteredData = data.filter((item) => selectedFilters.includes(item.name));
      onDataFiltered(filteredData);
      onClose();
    };

    useEffect(()=> {
        setSelectedFilters(data?.map(item=> item.name))
    }, [data])
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes("Year 1")}
                onChange={() => handleCheckboxChange("Year 1")}
              />
            }
            label="Year 1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes("Year 2")}
                onChange={() => handleCheckboxChange("Year 2")}
              />
            }
            label="Year 2"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes("Year 3")}
                onChange={() => handleCheckboxChange("Year 3")}
              />
            }
            label="Year 3"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes("Year 4")}
                onChange={() => handleCheckboxChange("Year 4")}
              />
            }
            label="Year 4"
          />
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
  
  export default FilterByYear;
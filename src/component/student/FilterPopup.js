import { Button, Checkbox, Dialog, DialogActions, DialogContent, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";

const FilterPopup = ({ open, onClose, onDataFiltered, data }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);
  
    const handleCheckboxChange = (filter) => {
      if (selectedFilters.includes(filter)) {
        setSelectedFilters(selectedFilters.filter((item) => item !== filter));
      } else {
        setSelectedFilters([...selectedFilters, filter]);
      }
    };
    
    const applyFilters = () => {
      const filteredData = data.filter((item) => selectedFilters.includes(item.label));
      onDataFiltered(filteredData);
      onClose();
    };

    useEffect(()=> {
        setSelectedFilters(data?.map(item=> item.label))
    }, [data])
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes("K19")}
                onChange={() => handleCheckboxChange("K19")}
              />
            }
            label="K19"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes("K20")}
                onChange={() => handleCheckboxChange("K20")}
              />
            }
            label="K20"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes("K21")}
                onChange={() => handleCheckboxChange("K21")}
              />
            }
            label="K21"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes("K22")}
                onChange={() => handleCheckboxChange("K22")}
              />
            }
            label="K22"
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
  
  export default FilterPopup;
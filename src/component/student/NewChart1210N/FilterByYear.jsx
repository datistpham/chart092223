import { Button, Checkbox, Dialog, DialogActions, DialogContent, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";

const FilterByYear = ({ open, onClose, onDataFiltered, data, tData, setDashedLineData, dashedLineData, tdashedLineData, lineDataIT, setLineDataIT, tLineDataIT, lineDataIT2, setLineDataIT2, tLineDataIT2, lineDataIT3, setLineDataIT3, tLineDataIT3 }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);
  
    const handleCheckboxChange = (filter) => {
      if (selectedFilters.includes(filter)) {
        setSelectedFilters(selectedFilters.filter((item) => item !== filter));
      } else {
        setSelectedFilters([...selectedFilters, filter]);
      }
    };
    
    const applyFilters = () => {
      const filteredData = tData.filter((item) => selectedFilters.includes(item.name));
      const filterDashedLineData= tdashedLineData.filter((item)=> selectedFilters.includes(item.name))
      const filterLineDataIT= tLineDataIT.filter(item=> selectedFilters.includes(item.name))
      const filterLineDataIT2= tLineDataIT2.filter(item=> selectedFilters.includes(item.name))
      const filterLineDataIT3= tLineDataIT3.filter(item=> selectedFilters.includes(item.name))
      setDashedLineData(filterDashedLineData)
      onDataFiltered(filteredData);
      setLineDataIT(filterLineDataIT)
      setLineDataIT2(filterLineDataIT2)
      setLineDataIT3(filterLineDataIT3)
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
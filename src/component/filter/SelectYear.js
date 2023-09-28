import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SelectYear = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Select year</InputLabel>
      <Select
        value={selectedValue}
        onChange={handleChange}
        label="Select an option"
      >
        <MenuItem value="option1">K19</MenuItem>
        <MenuItem value="option2">K20</MenuItem>
        <MenuItem value="option3">K21</MenuItem>
        <MenuItem value="option3">K22</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectYear;

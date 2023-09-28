import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const SelectGrade = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Select grade</InputLabel>
      <Select
        value={selectedValue}
        onChange={handleChange}
        label="Select an option"
      >
        <MenuItem value="option1">OOAD</MenuItem>
        <MenuItem value="option2">PPL</MenuItem>
        <MenuItem value="option3">AI</MenuItem>
        <MenuItem value="option3">CN</MenuItem>
        <MenuItem value="option3">OOP</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectGrade;

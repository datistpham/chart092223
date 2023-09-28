import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
const CountStudent = () => {
    const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
      <FormControl fullWidth>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #e7e7e7", borderRadius: 5, padding: "0 10px"}}>
            <PersonIcon width={70} />
            <div>
                <div style={{textAlign: "center"}}>Student</div>
                <div style={{fontSize: 32, fontWeight: 600, textAlign: "center"}}>300</div>
            </div>
        </div>
    </FormControl>
  )
}

export default CountStudent

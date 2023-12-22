import React, { useContext, useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { AppContext } from '../../App';
const CountStudent = () => {
  const { data2 } = useContext(AppContext)
  const uniqueIds = new Set();
  data2.forEach(item => {
    uniqueIds.add(item.id);
  });
  const numberOfUniqueIds = uniqueIds.size;
  console.log("numberOfUniqueIds", numberOfUniqueIds)
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #e7e7e7", borderRadius: 5, padding: "0 10px" }}>
        <PersonIcon width={70} />
        <div>
          <div style={{ textAlign: "center" }}>Student</div>
          <div style={{ fontSize: 32, fontWeight: 600, textAlign: "center" }}>{numberOfUniqueIds}</div>
        </div>
      </div>
    </FormControl>
  )
}

export default CountStudent

import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import DetailStudentTable from './DetailStudentTable';
import Data2Student from './Data2Student';

const style = {
 width: "60%", 
 position: "relative",
 left: "50%",
 transform: "translateX(-50%)"
};

export default function CompareStudent(props) {
  
  const handleClose = () => props?.setOpen(false);

  return (
    <div style={{maxHeight: "100vh", overflow: "auto"}}>
      
      <Modal
        open={props?.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{maxHeight: "100vh", overflow: "auto"}}
      >
        <Box sx={style}>
          <Data2Student />
        </Box>
      </Modal>
    </div>
  );
}
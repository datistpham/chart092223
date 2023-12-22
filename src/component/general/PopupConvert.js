import React, { useState } from 'react';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ExcelToJsonConverterDialog = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (e) => {
    setLoading(true);

    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 });

        // Chuyển mảng array thành mảng object
        const header = sheetData[0];
        const jsonData = sheetData.slice(1).map(row => {
          return header.reduce((obj, key, index) => {
            obj[key] = row[index];
            return obj;
          }, {});
        });

        const jsonString = JSON.stringify(jsonData, null, 2);

        const blob = new Blob([jsonString], { type: 'application/json' });
        saveAs(blob, 'converted_data.json');

        setLoading(false);
        handleClose();
      };

      reader.readAsArrayBuffer(file);
    } else {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Converter Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Excel to JSON Converter</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select an Excel file to convert to JSON.
          </DialogContentText>

          <input type="file" accept=".xls, .xlsx" onChange={handleFileChange} />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" disabled={loading} onClick={handleFileChange}>
            {loading ? <CircularProgress size={24} /> : 'Convert and Download JSON'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ExcelToJsonConverterDialog;

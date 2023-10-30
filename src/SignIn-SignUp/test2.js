import React, { useRef } from 'react';
import { Button, IconButton } from '@mui/material';
import { FaFileCsv } from 'react-icons/fa';

export default function YourComponent() {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle the file as needed
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        id="importButton"
        sx={{
          p: 0,
          pr: 1,
          borderRadius: '10px',
          color: '#a2a2a2',
          borderColor: '#c4c4c4',
          '&:hover': {
            borderColor: 'black',
            backgroundColor: 'white',
          }}
        }
        onClick={handleButtonClick} // Trigger the input click event
      >
        <IconButton>
          <FaFileCsv color="green" />
        </IconButton>
        Import using CSV
      </Button>

      <input
        type="file"
        accept=".csv"
        ref={fileInputRef} // Reference to the input element
        style={{ display: 'none' }} // Hide the input
        onChange={handleFileChange}
      />
    </>
  );
}

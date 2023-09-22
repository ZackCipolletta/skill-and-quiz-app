import React from 'react';
import Button from '@mui/material/Button';

const emptyRoundButtonStyle = {
  borderRadius: '50%', // Makes the button round
  width: '48px', // Adjust the width as needed
  height: '48px', // Adjust the height as needed
  border: '2px solid rgb(255, 20, 36)', // Border style
  padding: 0, // Remove padding
  minWidth: 0, // Ensure a minimum width of 0
  minHeight: 0, // Ensure a minimum height of 0
  backgroundColor: 'rgb(255, 122, 131)'
};

const EmptyRoundButton = () => {
  return (
    <Button variant="outlined" style={emptyRoundButtonStyle}>
      {/* You can add your content here */}
    </Button>
  );
};

export default EmptyRoundButton;

import React, { useState } from "react";
import { Box, Button, IconButton } from '@mui/material';
import '../Styles/Components.css';
import { CgColorPicker } from 'react-icons/cg';

export default function ColorTemplates(props) {

  const [selectedButton, setSelectedButton] = useState(null);
  // const [selectedColor, setSelectedColor] = useState(null);


  // selectColor

  const handleChange = (buttonName, color) => {
    setSelectedButton(buttonName);
    // setSelectedColor(color);
    props.selectColor(color);
  };

  const emptyRoundButtonStyle = {
    borderRadius: '50%', // Makes the button round
    width: '25px', // Adjust the width as needed
    height: '25px', // Adjust the height as needed
    padding: 0, // Remove padding
    margin: 7,
    minWidth: 0, // Ensure a minimum width of 0
    minHeight: 0, // Ensure a minimum height of 0
    border: selectedButton === null ? "2px solid transparent" : "2px solid transparent",
  };

  return (
    <div>
      <Box sx={{ my: 2 }}>
        <Button
          variant="outlined"
          style={emptyRoundButtonStyle}
          sx={{
            backgroundColor: '#a7d7f9',
            border: selectedButton === 'button1' ? '2px solid #3ea7f2 !important' : 'transparent',
            '&:hover': {
              backgroundColor: '#a7d7f9',
              border: '2px solid #3ea7f2 !important'
            }
          }}
          onClick={() => handleChange('button1', '#a7d7f9')}
        >
        </Button>
        <Button
          variant="outlined"
          style={emptyRoundButtonStyle}
          sx={{
            backgroundColor: '#cfd9fa',
            border: selectedButton === 'button2' ? '2px solid #5f81ee !important' : 'transparent',
            '&:hover': {
              backgroundColor: '#cfd9fa',
              border: '2px solid #5f81ee !important'
            }
          }}
          onClick={() => handleChange('button2', '#cfd9fa')}
        >
        </Button>

        <Button
          variant="outlined"
          style={emptyRoundButtonStyle}
          sx={{
            backgroundColor: '#f4bbc7',
            border: selectedButton === 'button3' ? '2px solid #e45775 !important' : 'transparent',
            '&:hover': {
              backgroundColor: '#f4bbc7',
              border: '2px solid #e45775 !important'
            }
          }}
          onClick={() => handleChange('button3', '#f4bbc7')}
        >
        </Button>

        <Button
          variant="outlined"
          style={emptyRoundButtonStyle}
          sx={{
            backgroundColor: '#c0f889',
            border: selectedButton === 'button4' ? '2px solid #5fb60b !important' : 'transparent',
            '&:hover': {
              backgroundColor: '#c0f889',
              border: '2px solid #5fb60b !important'
            }
          }}
          onClick={() => handleChange('button4', '#c0f889')}
        >
        </Button>

        <IconButton sx={{ color: 'black', transform: "scale(0.8)" }}>
          <CgColorPicker />
        </IconButton>

      </Box>
    </div>
  );
}

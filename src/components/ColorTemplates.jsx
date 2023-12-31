import React, { useState, useEffect } from "react";
import { Box, Button, IconButton } from '@mui/material';
import '../Styles/Components.css';
import { CgColorPicker } from 'react-icons/cg';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";



export default function ColorTemplates(props) {
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    if (props.quizColor) {
      setSelectedColor(props.quizColor);
    }
  }, []);

  useEffect(() => {
    props.selectColor(selectedColor);
  }, [selectedColor]);


  const emptyRoundButtonStyle = {
    borderRadius: '50%', // Makes the button round
    width: '25px', // Adjust the width as needed
    height: '25px', // Adjust the height as needed
    padding: 0, // Remove padding
    margin: 7,
    minWidth: 0, // Ensure a minimum width of 0
    minHeight: 0, // Ensure a minimum height of 0
    border: "2px solid transparent",
  };

  return (
    <div>
      <Box sx={{ my: 2 }}>
        <Button
          variant="outlined"
          style={emptyRoundButtonStyle}
          sx={{
            backgroundColor: '#a7d7f9',
            border: selectedColor === '#a7d7f9' ? '2px solid #3ea7f2 !important' : 'transparent',
            '&:hover': {
              backgroundColor: '#a7d7f9',
              border: '2px solid #3ea7f2 !important'
            }
          }}
          onClick={() => handleColorChange('#a7d7f9')}
        >
        </Button>
        <Button
          variant="outlined"
          style={emptyRoundButtonStyle}
          sx={{
            backgroundColor: '#cfd9fa',
            border: selectedColor === '#cfd9fa' ? '2px solid #5f81ee !important' : 'transparent',
            '&:hover': {
              backgroundColor: '#cfd9fa',
              border: '2px solid #5f81ee !important'
            }
          }}
          onClick={() => handleColorChange('#cfd9fa')}
        >
        </Button>

        <Button
          variant="outlined"
          style={emptyRoundButtonStyle}
          sx={{
            backgroundColor: '#f4bbc7',
            border: selectedColor === '#f4bbc7' ? '2px solid #e45775 !important' : 'transparent',
            '&:hover': {
              backgroundColor: '#f4bbc7',
              border: '2px solid #e45775 !important'
            }
          }}
          onClick={() => handleColorChange('#f4bbc7')}
        >
        </Button>

        <Button
          variant="outlined"
          style={emptyRoundButtonStyle}
          sx={{
            backgroundColor: '#c0f889',
            border: selectedColor === '#c0f889' ? '2px solid #5fb60b !important' : 'transparent',
            '&:hover': {
              backgroundColor: '#c0f889',
              border: '2px solid #5fb60b !important'
            }
          }}
          onClick={() => handleColorChange('#c0f889')}
        >
        </Button>

        <IconButton sx={{ color: 'black', transform: "scale(0.8)" }}>
          <CgColorPicker />
        </IconButton>
      </Box>
    </div>
  );
}
